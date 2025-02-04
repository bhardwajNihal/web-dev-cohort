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
exports.accountRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const accountModel_1 = require("../db/models/accountModel");
const userModel_1 = require("../db/models/userModel");
const mongoose_1 = __importDefault(require("mongoose"));
exports.accountRouter = (0, express_1.Router)();
exports.accountRouter.get("/balance", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AccountInfo = yield accountModel_1.Account.findOne({
        userId: req.userId
    });
    if (AccountInfo) {
        res.status(200).json({
            Balance: AccountInfo === null || AccountInfo === void 0 ? void 0 : AccountInfo.balance
        });
    }
    else {
        res.status(411).json({
            message: "Failed fetcing account Info!"
        });
    }
}));
exports.accountRouter.post("/transfer", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //starting a session and initiating a transaction to maintain atomicity
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    const fromAccountId = req.userId;
    const { toAccount, amount } = req.body;
    const Beneficiary = yield userModel_1.User.findOne({
        email: toAccount
    }).session(session);
    // check if recieving user exists in the db
    if (!Beneficiary) {
        yield session.abortTransaction();
        res.status(403).json({
            message: "Invalid beneficiary account!"
        });
        return;
    }
    const toAccountId = Beneficiary._id;
    //checking if the sender have sufficient balance
    const fromAccount = yield accountModel_1.Account.findOne({
        userId: fromAccountId
    }).session(session);
    //@ts-ignore
    if ((fromAccount === null || fromAccount === void 0 ? void 0 : fromAccount.balance) < amount) {
        yield session.abortTransaction();
        res.status(411).json({
            message: "Insufficient balance!!"
        });
        return;
    }
    // actual process to happen before commiting
    yield accountModel_1.Account.updateOne({
        userId: fromAccountId
    }, {
        $inc: {
            balance: -amount
        }
    }, { session });
    yield accountModel_1.Account.updateOne({
        userId: toAccountId
    }, {
        $inc: {
            balance: amount
        }
    }, { session });
    yield session.commitTransaction();
    session.endSession();
    res.status(200).json({
        message: "Transfer Successful!"
    });
}));
