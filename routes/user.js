const {veriftoken,veriftokenauthorisation, veriftokenAdmin} = require("../controllers/verifyToken")
const router = require('express').Router();
const userController = require("../controllers/user");


/*
 * UPDATE user
 */
//for update user by id
router.put('/:id', veriftokenauthorisation,userController.updateUser);


/**
 * DELATE user
 */
//for delate user by id
router.delete('/:id',veriftokenauthorisation,userController.delateUser);


/**
 * GET user
 */
 router.get('/find/:id',veriftokenAdmin,userController.getUserById)


/**
 * GET all user
 */
//for get all user 
 router.get('/',veriftokenAdmin,userController.getAllUsers);



/**
 * GET user stats for statistics user register per month
 */
//for get stat user registerd per month
router.get('/stats',veriftokenAdmin,userController.getUserStats)



module.exports = router;

