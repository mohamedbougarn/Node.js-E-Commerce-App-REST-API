const router = require('express').Router();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/pay',(req, res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",

    },(stripeErr,stripeSucc)=>{
        if (stripeErr) 
        {
            res.status(500).json({error: stripeerr});    
        } else 
        {
            res.status(200).json({success: stripeSucc});
    
        }
    });



});


module.exports = router