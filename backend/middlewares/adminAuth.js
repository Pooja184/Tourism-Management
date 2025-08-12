import jwt from 'jsonwebtoken';

const authUser=async(req,res,next)=>{
    const {adminToken} = req.headers;
    // console.log(req.headers);

    if(!adminToken){
        return res.json({success:false,message:"Not Authorized Login Again"});
    }
    try {
        const token_decode= jwt.verify(adminToken,process.env.JWT_SECRET);
        req.userId=token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export default authUser