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
var investorRoutes = require("./routes/investors");
var userRoutes = require("./routes/users");
var startupRoutes = require("./routes/startups");
//requiring models
var User = require("./models/user");
var Startup = require("./models/startup");
var Investor = require("./models/investors");
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
    Investor.find({}, function(err, allInvestor){
        if(err){
           console.log(err);
        }else{
           res.render("index", {investor: allInvestor, currentUser: req.user});      
        }
     });
});


//routes
 app.use("/", investorRoutes);
 app.use("/", userRoutes);
 app.use("/", startupRoutes);


 app.get("*", function(req, res){
	res.send("PAGE NOT FOUND!!");
});
app.listen(3000, function(){
    console.log("Server Connected!!");
});
