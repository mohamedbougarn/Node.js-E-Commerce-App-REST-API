const {veriftoken,veriftokenauthorisation, veriftokenAdmin} = require("../controllers/verifyToken")
const router = require('express').Router();
const Cart = require("../models/cart");

/**
 * @create cart 
 */
 //router.post('/',veriftoken,async(req,res)=>
 const create_cart = async (req,res)=>
 {
    veriftoken = req.headers.authorization;
     const newcart = new Cart(req.body)
     try 
     {
         const savedcart = await newcart.save();
         res.status(200).json(savedcart);
     }
     catch(err) 
     {
         res.status(500).json(err)
     }
 
 }; 
 
 
 /***
  * UPDATE cart fid by id
  */
 //router.put('/:id', veriftokenauthorisation, async(req, res)=>{
 
 const UpdateCartById = async(req, res)=>{
 
    veriftokenauthorisation = req.headers.authorization
   try {//for update product by id info
     const updatecart = await Cart.findByIdAndUpdate(
         req.params.id,
         {
         $set: req.body,
     },
     {
         new : true
     });
     res.status(200).json(updatecart)
   }
   catch(e) {
       res.status(500).json(e)
   }
 
 };
 
 
 /**
  * DELATE cart
  */
 //router.delete('/:id',veriftokenauthorisation,async(req,res)=>{
    
 const DeleteCart = async(req,res)=>{
    veriftokenauthorisation = req.headers.authorization;
   try {//for delete user info
   await Cart.findByIdAndDelete(req.params.id)
   res.status(200).json("cart deleted seccessfully !")
   }
   catch(err)
   {
     res.status(500).json(err)
   }
 
 };
 
 
 
 /**
  * GET user cart
  */
 // router.get('/find/:userid',veriftokenauthorisation,async(req,res)=>{
    
const FindUserCartById = async(req,res)=>{
 
    veriftokenauthorisation = req.headers.authorization;
   try {//for 
 
     const cart = await Cart.findOne({userid: req.params.userid})
     res.status(200).json(cart)
   }
   catch(err)
   {
     res.status(500).json(err)
   }
 
 };
 
 
 /**
  * GET all
  */
  //router.get('/',veriftokenAdmin,async(req,res)=>{
    
  const GetAll =  async(req,res)=>{
   veriftokenAdmin = req.headers.authorization;  
   try {
    const cart =await Cart.find();
     res.status(200).json(cart)
   }
   catch(err)
   {
     res.status(500).json(err)
   }
 
 };
 
 
 module.exports = {
    create_cart,
    UpdateCartById,
    DeleteCart,
    FindUserCartById,
    GetAll
};