//const router = require('express').Router();
const User = require('../models/User');
const cryptojs = require('crypto-js');
const jwt = require('jsonwebtoken'); 

/***regiseter route*/
//router.post('/regiseter',
const Register = async(req,res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptojs.AES.encrypt(
            req.body.password,
            process.env.PASS
        ).toString(),

    });
    try {
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    } catch (err) 
    { 
        console.log(err); 
        res.status(500).json(err);
    }

};


/***regiseter route*/
//router.post('/login',
const login = async(req,res) => {
    try {
        const user = await User.findOne(
            {
                username: req.body.username
            })
        !user && res.status(400).json("worng user not found");
        const hashedpassword = cryptojs.AES.decrypt(
            user.password,process.env.PASS
        );    
        const originpassword = hashedpassword.toString(cryptojs.enc.Utf8);
        originpassword !== req.body.password && res.status(400).json("wrong password") 
  

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        },process.env.JWT_SECRET,
        {expiresIn:"1d"});


        const{password,...other}=user._doc;

        res.status(200).json({other,accessToken});  
    } catch (err) 
    { 
        console.log(err); 
        res.status(500).json(err);
    }

};



module.exports = 
{
    Register,
    login
};