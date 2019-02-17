var express = require("express");
var Mentor = require("../models/mentors");
var router = express.Router();

//new 
router.get("/mentors", function(req, res){
   Mentor.find({}, function(err, mentor){
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
  var newMentor = {
    name: req.body.name,
    mobile: req.body.mobile,
//    image: String,
    mail: req.body.mail,
    loc: req.body.loc,
    company: req.body.company,
    intro: req.body.intro,
    occup: req.body.occup,
    com : req.body.com,
    designation: req.body.designation,
    prof_exp: req.body.prof_exp,
    sub_expertise: req.body.sub_expertise,
    sector_pref: req.body.sector_pref,
    image: req.body.image,
    linkedin: req.body.linkedin
   };
  Mentor.create(newMentor, function(err, newlyCreatedmentor){
     if(err){
        console.log(err);
     }else{
        //  console.log(newlyCreatedinvestor.name);
        res.redirect("/mentors");      
     }
  });
});

router.get("/mentors/:id", function(req, res){
   Mentor.findById(req.params.id , function(err, foundMentor){
      if(err){
         console.log(err);
      }else{
         console.log(req.params.id);
         res.render("mentors/show", {mentor: foundMentor});
      }
   });
});


 module.exports = router ; 