const {veriftoken,veriftokenauthorisation, veriftokenAdmin} = require("./verifyToken")
const router = require('express').Router();
const User = require("../models/User");


/***
 * UPDATE user
 */
router.put('/:id', veriftokenauthorisation, async(req, res)=>{
  if(req.body.password )
  {
    req.body.password = cryptojs.AES.encrypt(
        req.body.password,
        process.env.PASS
    ).toString();
  }

  try {//for update user info
    const updateuser = await User.findByIdAndUpdate(
        req.params.id,
        {
        $set: req.body,
    },
    {
        new : true
    });
    res.status(200).json(updateuser)
  }
  catch(e) {
      res.status(500).json(e)
  }

})


/**
 * DELATE user
 */
router.delete('/:id',veriftokenauthorisation,async(req,res)=>{

  try {//for delete user info
  await User.findByIdAndDelete(req.params.id)
  res.status(200).json("User deleted seccessfully !")
  }
  catch(err)
  {
    res.status(500).json(err)
  }

})



/**
 * GET user
 */
 router.get('/find/:id',veriftokenAdmin,async(req,res)=>{

  try {//for delete user info

    const user = await User.findById(req.params.id)
    const {password,...others} = user._doc;
    res.status(200).json(others)
  }
  catch(err)
  {
    res.status(500).json(err)
  }

})


/**
 * GET all user
 */
 router.get('/find/:id',veriftokenAdmin,async(req,res)=>{

  try {//for delete user info

    const user = await User.findById(req.params.id)
    const {password,...others} = user._doc;
    res.status(200).json(others)
  }
  catch(err)
  {
    res.status(500).json(err)
  }

})


module.exports = router;

