import multer from "multer";
import path from "path";

//configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); //file is folder ma save hu ge
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); //file name change hu ge
        // naam banega: 1731234567890-profile.jpg
    }
});

// file filter
const fileFilter = (req, file, cb) => {
   const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"];
   if(allowedFileTypes.includes(file.mimetype)){
    cb(null, true);
   }else{
    cb(new Error("Only .jpeg, .png, .jpg, .gif, .webp files are allowed"), false);
   }
};

const upload = multer({ storage, fileFilter });

export default upload;