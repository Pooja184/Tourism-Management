import jwt from 'jsonwebtoken';

const authUser=async(req,res,next)=>{
    const {userToken} = req.headers;
    // console.log(req.headers);

    if(!userToken){
        return res.json({success:false,message:"Not Authorized Login Again"});
    }
    try {
        const token_decode= jwt.verify(userToken,process.env.JWT_SECRET);
        req.userId=token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export default authUser