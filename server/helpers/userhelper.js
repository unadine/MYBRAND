const jwt = require('jsonwebtoken');
const {JWT_KEY}=require("../set-up/env");

exports.generateToken= (id)=>{
    const token = jwt.sign(
        { userId: id },
        JWT_KEY);
    return token;
}