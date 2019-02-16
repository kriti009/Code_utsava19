// console.log("sorry! nothing for you");
function validation()
{
  var user=document.getElementById('name').value
  var pass=document.getElementById('mobile').value
  var conpass=document.getElementById('email').value
  var mob=document.getElementById('location').value
  var mail=document.getElementById('investortype').value
  var capacity=document.getElementById('capacity').value
  if(user==""){
     document.getElementById('Name').innerHTML=" **Please fill the name field";
     return false;
  }
  if(user.length<2||user.length>20)
  {
    document.getElementById('Name').innerHTML=" **Name must be between 2 and 20 characters";
    return  false;
  }
  if(pass==""){
     document.getElementById('Mobile').innerHTML=" **Please fill the Mobile Number";
     return false;
  }
  if(pass!=10){
     document.getElementById('Mobile').innerHTML=" **Mobile Number should be 10 digits";
     return false;
  }
  if(isNaN(pass))
  {
    document.getElementById('mobile').innerHTML=" **user must write digit only";

  }
  if(conpass==""){
     document.getElementById('mail').innerHTML=" **Please fill the email Id";
     return false;
}
     if(mob==""){
        document.getElementById('loc').innerHTML=" **Please fill your location";
        return false;
     }
     if(mail==""){
        document.getElementById('inv').innerHTML=" **Please fill investor Type";
        return false;
     }
     if(capacity==""){
        document.getElementById('cap').innerHTML=" **Please fill Investment Capacity";
        return false;
     }
}