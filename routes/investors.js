var express = require("express");
var Investor = require("../models/investors");
var router = express.Router();

//new 
router.get("/investors/new", function(req, res){
    res.render("investors/new");
 });
 router.post("/investors/new",function(req, res){
   var newInvestor = {
       name: req.body.name ,
       mobile : req.body.mobile,
       mail : req.body.mail,
       loc : req.body.loc,
       intro : req.body.intro,
       inv_type : req.body.inv_type,
       invcap : req.body.invcap
    };
   Investor.create(newInvestor, function(err, newlyCreatedinvestor){
      if(err){
         console.log(err);
      }else{
          console.log(newlyCreatedinvestor.name);
         res.redirect("/");      
      }
   });
 });

 module.exports = router ; 