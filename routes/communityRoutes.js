const express= require('express');
const router=express.Router();
router.use(express.json());
const User=require('../models/User');
const Community=require('../models/community');
const {isLoggedIn}=require('../middleware');
router.get("/:name",async(req,res)=>
{
    const name = req.params.name; 
    const Currentcommunity = await Community.findOne({ communityname: name }).exec();
    if(!Currentcommunity)
    res.send("Community not found!");
    res.render('../views/communityPage.ejs',{Currentcommunity:Currentcommunity});
});
module.exports=router;