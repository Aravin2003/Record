const express= require('express');
const router=express.Router();
const passport = require('passport');
const User=require('../models/User');
const Community=require('../models/community');
router.use(express.json());
const {isLoggedIn}=require('../middleware');
router.get("/communityCreate",(req,res)=>
{
    res.render('../views/communityCreate.ejs')
});
router.post("/communityCreate",async(req,res)=>
{
  try{
  const{communityName,communityDescription}=req.body;
  const currentTime = Date.now();
  const today = new Date(currentTime);

const year = today.getFullYear();
const month = today.toLocaleString('default', { month: 'long' });
const day = String(today.getDate()).padStart(2, '0');

const todayString = `${day} ${month} ${year}`;
const Currentcommunity = new Community(
    {
        communityname:communityName,
        communitydescription:communityDescription,
        date:todayString,
        user_id: req.session.userId
    }
);

await Currentcommunity.save();
req.flash('success',"Successfully created!");
res.redirect(`/c/${communityName}`);
  }
  catch(e)
  {
    res.send(e.message);
  }
});

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
router.post('/signup/questions',async(req,res)=>
{
   const{signupquestion,signupanswer}=req.body;
   const currentuser= req.session.userId;
   await User.updateOne({_id:currentuser},{signupquestion:signupquestion,signupanswer:signupanswer});
   res.redirect('/');
});
router.post('/signup',async(req,res,next)=>
{
 try{
    const {email,username,password}=req.body;
    const newRegister=new User({email,username});
    const newUser=await User.register(newRegister,password);
    req.login(newUser,err=>
    {
        if(err)
        return next(err);
        res.redirect('/signup/continue');
        req.session.userId=newUser._id;
    });
    }
    catch(e)
    {
     res.send(e);
    }
  
});
router.post('/login',passport.authenticate('local',{failureRedirect:'/login'}),async(req,res)=>
{
    req.session.userId=req.user._id;
  req.flash('success',"Welcome Back,");
  res.redirect('/');
});
router.get('/logout',(req, res, next) =>{
    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash('success', "Goodbye!");
      res.redirect('/');
    });
  });

module.exports=router;