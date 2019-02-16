var mongoose = require("mongoose");
//Schema Setup
var investorSchema = new mongoose.Schema({
   name: String,
   mobile: String,
//    image: String,
   mail: String,
   loc: String,
   intro: String,
   ad_headline: String,
   inv_type: String,
    invcap : String
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