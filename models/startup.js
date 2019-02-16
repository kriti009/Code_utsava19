var mongoose = require("mongoose");
//Schema Setup
var startupSchema = new mongoose.Schema({
   name: String,
   designation: String,
   mobile: String,
   email: String,
//    image: String,
   entity: String,
   busi_type: String,
   nature: String,
   indus_sec: String,
   estblish_year: String,
   employee_no: Number,
   certi: {data: Buffer, contentType: String},
   website: String,

   annualSales: Number,
   grossIncome: Number,
   rentals: Number,
   facebook: String,
   twitter: String,
   linkedIn: String,

   address: String,
   city: String,
   pinCode: Number,

   oName: String,
   oEmail: String,
   odesignation: String

});
var Startup = mongoose.model("Startup", startupSchema);
// below line use to return value
module.exports = Startup;