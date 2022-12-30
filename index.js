const express=require("express");
const app=express();
const path=require("path");
app.set("view engine","ejs");
app.set('views',path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.get("/",(req,res)=>
{
    res.render("home.ejs");
})
app.listen(6969,()=>
{
   console.log("Listening!!"); 
})
const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/test');
