const express=require("express");
const app=express();
const path=require("path");
const session=require('express-session');
app.set("view engine","ejs");
app.set('views',path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/Recordjk');

const sessionConfig={
    secret:"Nothingfornow",
    resave: false,
    saveUninitialized: true
};
app.use(session(sessionConfig));

app.get("/",(req,res)=>
{
    res.render("home.ejs");
})




app.listen(6969,()=>
{
   console.log("Listening!!"); 
})

