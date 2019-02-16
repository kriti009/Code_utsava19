var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var localStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var methodOverride = require("method-override");
// var GoogleStrategy = require("passport-google-oauth20").Strategy;
//requiring routes
var User = require("./models/user");
// var passportFacebook = require('./auth/facebook');
var jsonParser = bodyParser.json();
// mongoose.connect("mongodb://localhost:27017/yelp_camp",{ useNewUrlParser: true});
mongoose.connect("mongodb://localhost:27017/code_utsav19",{ useNewUrlParser: true})


app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
// app.use(flash());

app.use(require("express-session")({
    secret: "hate you!!",
    resave: false,
    saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());
 passport.use(new localStrategy(User.authenticate()));
 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());
 
 app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    // res.locals.error = req.flash("error");
    // res.locals.success = req.flash("success");
    next();
 })
 

//Passport configuration
// app.use(require("express-session")({
//     secret: "hate you!!",
//     resave: false,
//     saveUninitialized: false
//  }));
//  app.use(passport.initialize());
//  app.use(passport.session());
 
//  passport.use(new localStrategy(User.authenticate()));
//  passport.serializeUser(User.serializeUser());
//  passport.deserializeUser(User.deserializeUser());






// app.set("view engine", "ejs");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(function(req, res, next){
//    res.locals.currentUser = req.user;
//    next();
// });

//routes------------------------
app.get("/", function(req, res){
	res.render("index");
});
//login signup routes------
app.get("/register", function(req, res){
    res.render("register");
});
app.post("/register",urlencodedParser , function(req, res){
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
app.get("/login", function(req,res){
    res.render("login");
});
app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
 }),function(req, res){
 });
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
 });
//  app.get("/new/investor", function(req, res){
//     res.render("")
//  })

app.get("*", function(req, res){
	res.send("PAGE NOT FOUND!!");
});
app.listen(3000, function(){
    console.log("Server Connected!!");
});