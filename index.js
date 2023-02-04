const express=require("express");
const path=require("path");
const session=require('express-session');
const mongoose=require("mongoose");
const flash=require('connect-flash');
const passport = require('passport');
const localstrategy=require('passport-local');
const user=require('./models/User');
const bodyParser = require("body-parser");
mongoose.connect('mongodb://localhost:27017/Recordjk');

const sessionConfig={
    secret:"Nothingfornow",
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,
        expires:Date.now()+1000*60*60*24*7,
        maxAge:1000*60*60*24*7
    }
};
const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.set('views',path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public"))); 
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

const userRoutes=require('./routes/userRoutes');
app.use('/',userRoutes);

app.get("/",(req,res)=>
{
    res.render("home.ejs");
})

app.listen(6969,()=>
{
   console.log("Listening!!"); 
})

