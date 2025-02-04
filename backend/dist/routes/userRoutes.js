"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const zod_1 = require("zod");
const userModel_1 = require("../db/models/userModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validInputFormat = zod_1.z.object({
        fullname: zod_1.z.string().min(3).max(100),
        email: zod_1.z.string().email().max(150),
        password: zod_1.z.string().min(6, "password should be of minimum 6 characters")
    });
    const validateInput = validInputFormat.safeParse(req.body);
    if (!validateInput.success) {
        res.status(411).json({
            message: "invalid input format!",
            error: validateInput.error.errors
        });
        return;
    }
    // if request data is successfully validated
    const { fullname, email, password } = req.body;
    // find if user already exists
    const findUser = yield userModel_1.User.findOne({
        email: email
    });
    if (findUser) {
        res.status(411).json({
            message: "Email already exists!!"
        });
        return;
    }
    //hashing password before storing 
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    yield userModel_1.User.create({
        fullname,
        email,
        password: hashedPassword
    });
    res.status(200).json({
        message: "User Signed Up successfully!!!"
    });
}));
exports.userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const finduser = yield userModel_1.User.findOne({
        email
    });
    if (!finduser) {
        res.status(411).json({
            message: "user not found. Please Register!"
        });
        return;
    }
    const comparePassword = yield bcrypt_1.default.compare(password, finduser.password);
    if (!comparePassword) {
        res.status(403).json({
            message: "Incorrect password!!!"
        });
        return;
    }
    const token = jsonwebtoken_1.default.sign({
        id: finduser._id.toString()
    }, process.env.JWT_SECRET);
    res.status(200).json({
        message: "User Signed In successfully!!",
        token: token
    });
}));
exports.userRouter.put("/update", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    const { fullname, email, password } = req.body;
    try {
        yield userModel_1.User.updateOne({
            _id: userId
        }, {
            fullname,
            email,
            password
        });
        res.status(200).json({
            message: "User details updated successfully!"
        });
    }
    catch (error) {
        console.log("Error Updating User", error);
    }
}));
exports.userRouter.get("/user-data", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    const foundUser = yield userModel_1.User.findOne({
        _id: userId
    });
    if (!foundUser) {
        res.status(411).json({
            message: "User not found!"
        });
        return;
    }
    res.status(200).json({
        fullname: foundUser.fullname,
        email: foundUser.email
    });
}));
// Route to get all the users based on letters they start with, basically to filter out the desired user from the list of users.
exports.userRouter.get("/bulk", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filterTexts = req.query.filter || ""; // "" so as to get all if no filters applied
    const FoundUsers = yield userModel_1.User.find({
        $or: [{
                fullname: {
                    "$regex": filterTexts
                }
            }]
    });
    res.json({
        users: FoundUsers.map(user => ({
            fullname: user.fullname,
            email: user.email,
            userId: user._id
        }))
    });
}));
