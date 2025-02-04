import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
    fullname : {                    // here changed username to fullname, which earlier had unique:true, thus is got added in the indexes in the mongoDb compass, so it had to to manually deleted form their, or will get errors for breaching uniqueness for username, even if we are typing fullname.
        type:String,
        required: true,
        trim: true,
        lowercase: true
    },
    email : {
        type:String,
        unique:true,
        require: true,
        trim: true,
        lowercase: true
    },
    password: {
        type:String,
        required: [true,"password is required"]
    }
})

export const User = mongoose.model("User", userSchema);