var express = require("express");
var User = require("../models/user");
var passport = require("passport");
var router = express.Router();

//login signup routes------
router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register" , function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
       if(err){
          return res.redirect("register");
       }else{
            passport.authenticate("local")(req, res, function(){
              console.log(req.body.username);
             res.redirect("/");
          });
       }
    }); 
});

router.get("/login", function(req,res){
    res.render("login");
});
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
 }),function(req, res){
 });
 router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
 });

 module.exports = router ; 
