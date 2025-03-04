const mongoose= require('mongoose');
const connection=require('../config/connection.js');

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    country:String
});




const userModel= mongoose.model("query",userSchema);



module.exports=userModel;