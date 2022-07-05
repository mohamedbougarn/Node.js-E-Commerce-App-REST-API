const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
//var mongoUrl = '"mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"'
 
dotenv.config();


mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Connected to MongoDB: %s'))
.catch((err)=>{console.log('MongoDB connection error: %s \n', err)});




app.listen(process.env.PORT || 3000 , ()=> {
console.log("backend listening on port 3000...");
});
//console.log("hello world!");
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false