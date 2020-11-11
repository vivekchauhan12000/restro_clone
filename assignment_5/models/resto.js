const mongoose = require("mongoose");

const restoSchema= new mongoose.Schema({

 name:{
   type:String,
   required:true
 },
 location:{
  type:String,
  required:true
 },
 food:{
  type:String,
 
 },
 description:{
  type:String,
 
 }
})

module.exports = mongoose.model('restro',restoSchema)