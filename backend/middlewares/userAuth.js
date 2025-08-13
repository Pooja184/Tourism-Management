import jwt from 'jsonwebtoken';

const authUser=async(req,res,next)=>{
    const {usertoken} = req.headers;
    // console.log(req.headers);

    if(!usertoken){
        return res.json({success:false,message:"Not Authorized Login Again"});
    }
    try {
        const token_decode= jwt.verify(usertoken,process.env.JWT_SECRET);
        req.userId=token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export default authUser