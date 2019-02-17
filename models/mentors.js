var mongoose = require("mongoose");
//Schema Setup
var mentorSchema = new mongoose.Schema({
    name: String,
    mobile: String,
//    image: String,
    mail: String,
    loc: String,
    company: String,
    intro: String,
    occup: String,
    ad_headline: String,
    com : String,
    designation: String,
    prof_exp: String,
    prof_sum: String,
    prof_sub: String,
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
var Mentor = mongoose.model("Mentor", mentorSchema);
// below line use to return value
module.exports = Mentor;