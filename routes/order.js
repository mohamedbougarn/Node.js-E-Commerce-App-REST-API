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
//for get all orders info
 router.get('/',veriftokenAdmin,Ordercontrollers.getAll);


/**
 * 
 * GET  monthly
 */

router.get('/getincoming',veriftokenAdmin, Ordercontrollers.getMonthlyIncoming);



module.exports = router;



