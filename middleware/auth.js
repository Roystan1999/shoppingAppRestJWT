const jwt = require('jsonwebtoken');
SECRET_KEY ='TECHNOELEVATE'


//either user or admin

const authorizedUserAdmin = async (req, res, next) => {
    console.log(req.headers['authorization']);
    if(req.headers['authorization']){
        const token = req.headers['authorization'].split(' ')[1]
        const payload= await jwt.verify(token,SECRET_KEY)

        if(payload.role==='user' || payload.role==='admin'){
            next();
        }
        else{
            res.status(401).json({
                error: 'true',
                message:"not authorized",
                data:null
            })
        }
    }
}

//only admin

const authorizedAdmin = async (req, res, next) => {
    console.log(req.headers['authorization']);
    if(req.headers['authorization']){
        const token = req.headers['authorization'].split(' ')[1]
        const payload= await jwt.verify(token,SECRET_KEY)

        if( payload.role ==='admin'){
            next();
        }
        else{
            res.status(401).json({
                error: 'true',
                message:"not authorized",
                data:null
            })
        }
    }
}

module.exports ={
    authorizedAdmin,
    authorizedUserAdmin
}