var express = require("express");
var Investor = require("../models/mentors");
var router = express.Router();

//new 
router.get("/mentors", function(req, res){
   Investor.find({}, function(err, mentor){
      if(err){
         console.log(err);
      }else{
         res.render("./mentors/index", {mentor: mentor, currentUser: req.user});      
      }
   });
});
router.get("/mentors/new", function(req, res){
   res.render("mentors/new");
});
router.post("/mentors/new",function(req, res){
  var newInvestor = {
      name: req.body.name ,
      mobile : req.body.mobile,
      mail : req.body.mail,
      loc : req.body.loc,
      intro : req.body.intro,
      inv_type : req.body.inv_type,
      invcap : req.body.invcap,
      ad_headline : req.body.ad_headline
   };
  Investor.create(newInvestor, function(err, newlyCreatedinvestor){
     if(err){
        console.log(err);
     }else{
         console.log(newlyCreatedinvestor.name);
        res.redirect("/investors");      
     }
  });
});

router.get("/investors/:id", function(req, res){
   Investor.findById(req.params.id , function(err, foundInvestor){
      if(err){
         console.log(err);
      }else{
         console.log(req.params.id);
         res.render("investors/show", {investor: foundInvestor});
      }
   });
});


 module.exports = router ; 