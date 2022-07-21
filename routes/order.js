const {veriftoken,veriftokenauthorisation, veriftokenAdmin} = require("./verifyToken")
const router = require('express').Router();
const Orders = require("../models/Order");



/**
 * @create order 
 */
router.post('/',veriftoken,async(req,res)=>
{
    const newOrder = new Orders(req.body)
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
    const updateOrder = await Orders.findByIdAndUpdate(
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
  await product.findByIdAndDelete(req.params.id)
  res.status(200).json("product deleted seccessfully !")
  }
  catch(err)
  {
    res.status(500).json(err)
  }

})



/**
 * GET product info
 */
 router.get('/find/:id',veriftokenAdmin,async(req,res)=>{

  try {//for 

    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
  }
  catch(err)
  {
    res.status(500).json(err)
  }

})


/**
 * GET all products info
 */
 router.get('/',async(req,res)=>{

    const querynew = req.query.new
    const qcategory = req.query.category
  try {//for delete user info

    let products;
    if(querynew)
    {
        products = await Product.find().sort({createdAt : -1}).limit(5);
    }
    else if(qcategory)
    {   
        products = await Product.find({category : {
            $in : [qcategory],
        }, 

    })
    }else
    {
        products = await Product.find();

    }
    res.status(200).json(products)
  }
  catch(err)
  {
    res.status(500).json(err)
  }

})


module.exports = router;



