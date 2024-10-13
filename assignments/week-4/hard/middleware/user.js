const jwt = require('jsonwebtoken')
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET

function userAuth(req, res, next) {
    
    const authHeader = req.headers['authorization'];    //extracts header as bearer <token>
    const token = authHeader.split(' ')[1];             //now token needs to be extracted separately, which is done by spliting the header on the basis of space, and from the array fromed getting the element at the 1st index i.e the token

    const verifyUser = jwt.verify(token,JWT_SECRET);

    if(!verifyUser){
        res.status(403).json({
            msg : "token invalid! please sign in again."
        })
        return;
    }

    req.userId = verifyUser.userId;
    next();
}

module.exports = { userAuth };