"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuth = userAuth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function userAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(403).json({
            message: "Token not provided!!"
        });
        return;
    }
    const token = authHeader.split(" ")[1];
    //verify token
    const Decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    if (!Decoded) {
        res.status(403).json({
            message: "Invalid token! Please Sign In!"
        });
        return;
    }
    req.userId = Decoded.id;
    next();
}
