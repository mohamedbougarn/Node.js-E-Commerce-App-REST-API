const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * @pay route for stripe payment
 */
//router.post('/pay',
const pay = (req, res)=>
{
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
};


module.exports = 
{
    pay
};