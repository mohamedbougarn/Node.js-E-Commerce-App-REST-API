const {veriftoken,veriftokenauthorisation, veriftokenAdmin} = require("../controllers/verifyToken")
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
 * UPDATE product fid by id
 */
router.put('/:id', veriftokenAdmin, async(req, res)=>{


  try {//for update product by id info
    const updateprod = await Product.findByIdAndUpdate(
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


/**
 * DELATE product
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



