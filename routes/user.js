const {veriftoken,veriftokenauthorisation} = require("./verifyToken")
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




module.exports = router;

