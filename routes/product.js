const {veriftoken,veriftokenauthorisation, veriftokenAdmin} = require("./verifyToken")
const router = require('express').Router();
const Product = require("../models/Product");



/**
 * @create product 
 */
router.post('/',veriftokenAdmin,async(req,res)=>
{
    const newprod = new Product(req.body)
    try 
    {
        const savedProd = await newprod.save();
        res.status(200).json(savedProd);
    }
    catch(err) 
    {
        res.status(500).json(err)
    }

});



/***
 * UPDATE user
 */
router.put('/:id', veriftokenAdmin, async(req, res)=>{


  try {//for update product by id info
    const updateprod = await User.findByIdAndUpdate(
        req.params.id,
        {
        $set: req.body,
    },
    {
        new : true
    });
    res.status(200).json(updateprod)
  }
  catch(e) {
      res.status(500).json(e)
  }

})


// /**
//  * DELATE user
//  */
// router.delete('/:id',veriftokenauthorisation,async(req,res)=>{

//   try {//for delete user info
//   await User.findByIdAndDelete(req.params.id)
//   res.status(200).json("User deleted seccessfully !")
//   }
//   catch(err)
//   {
//     res.status(500).json(err)
//   }

// })



// /**
//  * GET user
//  */
//  router.get('/find/:id',veriftokenAdmin,async(req,res)=>{

//   try {//for delete user info

//     const user = await User.findById(req.params.id)
//     const {password,...others} = user._doc;
//     res.status(200).json(others)
//   }
//   catch(err)
//   {
//     res.status(500).json(err)
//   }

// })


// /**
//  * GET all user
//  */
//  router.get('/',veriftokenAdmin,async(req,res)=>{

//     const query = req.query.new
//   try {//for delete user info

//     const users = query 
//     ? await User.find().sort({_id : -1}).limit(1) 
//     : await User.find()

//     res.status(200).json(users)
//   }
//   catch(err)
//   {
//     res.status(500).json(err)
//   }

// })




// /**
//  * GET user stats for statistics user register per month
//  */
// router.get('/stats',veriftokenAdmin,async(req,res)=>{
//   const date = new Date();
//   const lastyear = new Date(date.setFullYear(date.getFullYear() - 1));
//   try {
//     const data = await User.aggregate([
//       {$match: {createdAt : {$gte : lastyear} }},
//       {
//         $project: {
//           month : { $month: "$createdAt"},
//         },
//       },
//       {
//         $group: { 
//           _id : "$month",
//           total : {$sum : 1},
//         }
//       }
//     ]);
//     res.status(200).json(data);
//   }
//   catch(err){
//     res.status(500).json(err)
//   }



// });



module.exports = router;



