const router = require('express').Router();

//const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripecontroller = require('../controllers/stripe');

router.post('/pay',stripecontroller.pay);


module.exports = router