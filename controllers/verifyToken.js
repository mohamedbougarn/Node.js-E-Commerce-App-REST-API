const jwt = require('jsonwebtoken');


const veriftoken = (req, res, next) => {
    const authheader = req.headers.token

    if (authheader){
        const token = authheader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
            if(err)  res.status(403).json("not authorized token not valid", err);
            req.user = user
            next();
                
        })

    }else{
        return res.status(401).json("not authentecated !!")
    }

};//for verif token request


/** 
 * @veriftoken and @authorisation request
 */
const veriftokenauthorisation = (req, res, next) =>{
    veriftoken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin)
        {
            next();
        }else{
            res.status(403).json("you are not authorized to access this!"); 

        }
    });
    
}


/** 
 * @veriftoken and @authorisation admin request
 */
 const veriftokenAdmin = (req, res, next) =>{
    veriftoken(req,res,()=>{
        if(req.user.isAdmin)
        {
            next();
        }else{
            res.status(403).json("you are not authorized to do that!!"); 

        }
    });

 }



module.exports = { 
    veriftoken,
    veriftokenauthorisation,
    veriftokenAdmin
};