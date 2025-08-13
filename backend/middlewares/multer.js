import multer from "multer";

// Configure storage behavior for uploaded files
const storage = multer.diskStorage({
     // Set the filename for uploaded files
    filename:function(req,file,callback){
        // Use the original file name
        callback(null,file.originalname)
    }
})

// Initialize multer middleware with the defined storage settings
const upload = multer({storage})

export default upload