const mongoose=require('mongoose');
const connection=require('../config/connection.js');

const reviewSchema=mongoose.Schema({
    name:String,
    review:String
});

module.exports=mongoose.model("reviews",reviewSchema);