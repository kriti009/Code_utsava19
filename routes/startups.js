var express = require("express");
var Startup = require("../models/startup");
var fs = require("fs");
var router = express.Router();

router.get("/startups/new", function(req, res){
    res.render("startups/new");
});

router.post("/starups/new",function(req, res){
    var newStartup = {
        name: req.body.name,
        designation: req.body.designation,
        mobile: req.body.mobile,
        email: req.body.email,
     //    image: String,
        entity: req.body.entity,
        busi_type: req.body.busi_type,
        nature: req.body.nature,
        indus_sec: req.body.indus_sec,
        estblish_year: req.body.estblish_year,
        employee_no: req.body.employee_no,
        certi: req.body.certi,
        website: req.body.website,
     
        annualSales: req.body.annualSales,
        grossIncome: req.body.grossIncome,
        rentals: req.body.rentals,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        linkedIn: req.body.linkedIn,

        address: req.body.address,
        city: req.body.city,
        pinCode: req.body.pinCode,

        oName: req.body.oName,
        oEmail: req.body.oEmail,
        odesignation: req.body.odesignation
     };
     Startup.create(newStartup, function(err, newlyCreatedStartup){
       if(err){
          console.log(err);
       }else{
           console.log(newlyCreatedStartup.name);
          res.redirect("/");      
       }
    });
  });

  module.exports = router ; 
 
