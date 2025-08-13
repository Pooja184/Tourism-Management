import jwt from 'jsonwebtoken';

const authAdmin=async(req,res,next)=>{
    const {admintoken} = req.headers;
    // console.log(req.headers);
    // console.log(admintoken)

    if(!admintoken){
        return res.json({success:false,message:"Not Authorized Login Again"});
    }
    try {
        const token_decode= jwt.verify(admintoken,process.env.JWT_SECRET);
        req.userId=token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export default authAdmin