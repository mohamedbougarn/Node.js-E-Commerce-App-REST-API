const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user"); 
const authRoute = require("./routes/authentification"); 
const productRoute = require("./routes/product"); 
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

app.use(express.json());
dotenv.config();


mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Connected to MongoDB: %s'))
.catch((err)=>{console.log('MongoDB connection error: %s \n', err)});

app.get('/api/test/', ()=>{
console.log('test request sesessful');
})


app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);

//router product
app.use('/api/product',productRoute);

app.use("/api/cart",cartRoute);
app.use("/api/order",orderRoute);



app.listen(process.env.PORT || 3000 , ()=> {
console.log("backend listening on port 3000...");
});
//console.log("hello world!");
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false

module.exports = app;