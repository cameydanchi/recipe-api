

export const  checkUserSession = (req,res, next) =>{
    if(req.session.user){
        next();
    }else{
        return res.status(401).json('No User Session')
    }
}