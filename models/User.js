const mongoose=require('mongoose');
const passportlocalMongoose= require('passport-locl-mongoose');
const userschema= new mongoose.Schema(
    {
        email:
        {
          type: String,
          required:true,
          unique:true
        }
    }
);

userschema.plugin(passportlocalMongoose);
exports.module=mongoose.model('User',userschema);