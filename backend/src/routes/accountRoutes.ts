import { Router } from "express";
import { userAuth } from "../middleware/auth";
import { Request,Response } from "express";
import { Account } from "../db/models/accountModel";
import { User } from "../db/models/userModel";
import mongoose from "mongoose";

export const accountRouter = Router();


accountRouter.get("/balance", userAuth, async(req:Request, res:Response)=>{

    const AccountInfo = await Account.findOne({
        userId : req.userId
    });

    if(AccountInfo) {
        res.status(200).json({
        Balance : AccountInfo?.balance
    })}
    else{
        res.status(411).json({
            message : "Failed fetcing account Info!"
        })
    }

})

accountRouter.post("/transfer", userAuth, async(req:Request, res:Response)=>{

    //starting a session and initiating a transaction to maintain atomicity
    const session = await mongoose.startSession();
    session.startTransaction()

    const fromAccountId = req.userId;
    const { toAccount, amount}  = req.body;

    const Beneficiary = await User.findOne({
        email : toAccount
    }).session(session)

    // check if recieving user exists in the db
    if(!Beneficiary){
        await session.abortTransaction()
        res.status(403).json({
            message : "Invalid beneficiary account!"
        })
        return;
    }
    const toAccountId = Beneficiary._id
    

    //checking if the sender have sufficient balance
    const fromAccount = await Account.findOne({
        userId : fromAccountId
    }).session(session)
    //@ts-ignore
    if(fromAccount?.balance < amount){
        await session.abortTransaction()
        res.status(411).json({
            message : "Insufficient balance!!"
        })
        return;
    }
    
    // actual process to happen before commiting
    await Account.updateOne({
        userId : fromAccountId
    }, {
        $inc:{
            balance : -amount
        } 
    },{session})

    await Account.updateOne({
        userId : toAccountId
    },{
        $inc:{
            balance: amount
        }
    },{session})

    await session.commitTransaction()
    session.endSession()

    res.status(200).json({
        message : "Transfer Successful!"
    })

})


