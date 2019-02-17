var mongoose = require("mongoose");
//Schema Setup
var investorSchema = new mongoose.Schema({
    name: String,
    mobile: String,
//    image: String,
    mail: String,
    loc: String,
    company: String,
    intro: String,
    occup: String,
    com : String,
    designation: String,
    prof_exp: String,
    sub_expertise: String,
    sector_pref: String,
    image: {data: Buffer, contentType: String},
    linkedin: String
//    author: {
//       id:{
//          type : mongoose.Schema.Types.ObjectId,
//          ref: "User"
//       },
//       username: String
//    },
//    comments: [
//          {
//             type: mongoose.Schema.Types.ObjectId ,
//             ref: "Comment"
//          }
//       ]
});
var Investor = mongoose.model("Investor", investorSchema);
// below line use to return value
module.exports = Investor;