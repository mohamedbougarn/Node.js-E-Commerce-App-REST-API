const {veriftoken,veriftokenauthorisation, veriftokenAdmin} = require("./verifyToken")
const router = require('express').Router();
const Order = require("../models/Order");



/**
 * @create order 
 */
router.post('/',veriftoken,async(req,res)=>
{
    const newOrder = new Order(req.body)
    try 
    {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }
    catch(err) 
    {
        res.status(500).json(err)
    }

});



/***
 * UPDATE order fid by id
 */
router.put('/:id', veriftokenAdmin, async(req, res)=>{


  try {//for update product by id info
    const updateOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
        $set: req.body,
    },
    {
        new : true
    });
    res.status(200).json(updateOrder)
  }
  catch(e) {
      res.status(500).json(e)
  }

})


/**
 * DELATE order
 */
router.delete('/:id',veriftokenAdmin,async(req,res)=>{

  try {//for delete user info
  await Order.findByIdAndDelete(req.params.id)
  res.status(200).json("product deleted seccessfully !")
  }
  catch(err)
  {
    res.status(500).json(err)
  }

})



/**
 * GET user orders  product info
 */
 router.get('/find/:userId',veriftokenauthorisation,async(req,res)=>{

  try {//for 

    const orders = await Orders.find({userID: req.params.userId});
    res.status(200).json(orders)
  }
  catch(err)
  {
    res.status(500).json(err)
  }

})


/**
 * GET all orders info
 */
 router.get('/',veriftokenAdmin,async(req,res)=>{

  try {
    let orders;
        orders = await Orders.find();
   
    res.status(200).json(orders)
  }
  catch(err)
  {
    res.status(500).json(err)
  }

});







module.exports = router;



