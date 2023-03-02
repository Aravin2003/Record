const mongoose=require('mongoose');
const passportLocalMongoose= require('passport-local-mongoose');
const userschema= new mongoose.Schema(
    {
        email:
        {
          type: String,
          required:true,
          unique:true
        },
        signupquestion:
        {
         type: String,
        },
        signupanswer:
        {
         type: String,
        }
    }
);
userschema.plugin(passportLocalMongoose);
module.exports=mongoose.model('User',userschema);

