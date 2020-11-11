const express = require('express')
const router= express.Router();
const Resto = require('../models/resto');



router.get('/',async(req,res,next)=>{
  try{
       const resto= await Resto.find()
       res.json(resto)
  }catch(err){
   res.send('Error' + err)
  }

});

router.post('/',async(req,res)=>{
    
    

    try{

        const restro = new Resto({
            name:req.body.name,
            location:req.body.location,
            food:req.body.food,
            description:req.body.description
    
        });
       const a1=await restro.save();
       res.json(a1); 
     }catch(err){
    res.send('Error'+ err);
   }

});



module.exports=router;