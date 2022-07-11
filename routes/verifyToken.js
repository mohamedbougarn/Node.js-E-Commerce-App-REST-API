const jwt = require('jsonwebtoken');


const veriftoken = (req, res, next) => {
    const authheader = req.headers.token

    if (authheader){
        jwt.verify(token,process.env.JWT_SECRET, (err, token) => {
            if(err)
            {
                res.status(403).json("not authorized token not valid", err);
            }
            else
                req.user = user
                next();
        })

    }else{
        return res.status(401).json("not authentecated !!")
    }

};//for verif token request


module.exports = { veriftoken };