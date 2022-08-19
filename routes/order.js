const {veriftoken,veriftokenauthorisation, veriftokenAdmin} = require("../controllers/verifyToken")
const router = require('express').Router();
const Ordercontrollers = require("../controllers/order");


/**
 * @create order 
 */
//for create order
router.post('/',veriftoken,Ordercontrollers.createOrder);



//for update order by id
router.put('/:id', veriftokenAdmin,Ordercontrollers.updatedOrderId );


//for delate order by id 
router.delete('/:id',veriftokenAdmin, Ordercontrollers.delateOrderById);

//for get user orders product 
router.get('/find/:userId',veriftokenauthorisation,Ordercontrollers.getUserOrderProductInfo)


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


/**
 * 
 * GET  monthly
 */

router.get('/getincoming',veriftokenAdmin, async(req, res)=>{
const date = new Date();
const lastmonth = new Date(date.setMonth(date.getMonth() -1 ));
const pmonth = new Date(new Date().setMonth(lastmonth.getMonth() -1 ));

try {
    const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    

} catch (error) {
    res.status(500).json(error)
}

});



module.exports = router;



