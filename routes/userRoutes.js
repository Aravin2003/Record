const express= require('express');
const router=express.Router();
const passport = require('passport');
const User=require('../models/User');
router.use(express.json());
const {isLoggedIn}=require('../middleware');
router.get('/login',(req,res)=>
{
    res.render('../views/login.ejs')
});
router.get('/signup',(req,res)=>
{
    res.render('../views/signup.ejs')
});
router.get('/signup/continue',async(req,res)=>
{
    const currentuser=await User.findById(req.session.userId).exec();
    res.render('../views/signupcontinue.ejs',{ currentuser: currentuser});
});
router.get('/signup/questions',(req,res)=>
{
    res.render('../views/signupquestion.ejs');
});
router.post('/signup',async(req,res)=>
{
 try{
    const {email,username,password}=req.body;
    const newRegister=new User({email,username});
    const newUser=await User.register(newRegister,password);
    req.session.userId=newUser._id;
    res.redirect('/signup/continue');
    }
    catch(e)
    {
      res.send(e.message);
    }
  
});
router.post('/login',passport.authenticate('local',{failureRedirect:'/login'}),(req,res)=>
{
  res.redirect('/');
});
module.exports=router;