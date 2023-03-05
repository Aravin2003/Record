
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const helmet=require("helmet");
const express=require("express");
const path=require("path");
const session=require('express-session');
const mongoose=require("mongoose");
const flash=require('connect-flash');
const passport = require('passport');
const localstrategy=require('passport-local');
const user=require('./models/User');
const bodyParser = require("body-parser");
const MongoStore = require('connect-mongo');
const mongoSanitize = require("express-mongo-sanitize");
const dbUrl=process.env.DB_URL;
mongoose.connect(dbUrl);
const sessionConfig={
    name: "RecordkaSession",
    //secure:true,
    secret:"Nothingfornow",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: dbUrl,
        touchAfter: 24 * 3600 
      }),
    cookie:{
        httpOnly:true,
        expires:Date.now()+1000*60*60*24*7,
        maxAge:1000*60*60*24*7
    }
};
const app=express();
//app.use(helmet({ contentSecurityPolicy:false}));
app.use(mongoSanitize());
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

app.use((req,res,next)=>
{
  res.locals.currentUser=req.user;
  res.locals.success=req.flash('success');
  res.locals.error=req.flash('error');
  next();
});
const communityRoutes=require('./routes/communityRoutes');
app.use('/c/',communityRoutes);
const userRoutes=require('./routes/userRoutes');
app.use('/',userRoutes);

app.get("/",async(req,res)=>
{
    res.render("home.ejs");
})
app.listen(3000,()=>
{
   console.log("Listening!!"); 
})

