const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const userrouter = require("./routes/user"); 
const authrouter = require("./routes/authentification"); 


app.use(express.json());
dotenv.config();


mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Connected to MongoDB: %s'))
.catch((err)=>{console.log('MongoDB connection error: %s \n', err)});

app.get('/api/test/', ()=>{
console.log('test request sesessful');
})


app.use("/api/auth",authrouter);
app.use("/api/user",userrouter);


app.listen(process.env.PORT || 3000 , ()=> {
console.log("backend listening on port 3000...");
});
//console.log("hello world!");
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false