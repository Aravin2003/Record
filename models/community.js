const mongoose=require('mongoose');

const communitySchema= new mongoose.Schema(
    {
        communityname:
        {
            type:String,
            required:true,
            unique:true
        },
        communitydescription:
        {
            type:String,
            required:true,
            unique:true
        },
        date:
        {
            type: String,
            required:true
        },
        user_id:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' 
        }
    }
);

module.exports=mongoose.model('Community',communitySchema);