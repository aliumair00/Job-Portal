import express from "express";
import { register, login, getMe } from "../controllers/authController.js"
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me",protect,getMe);

// upload image
router.post("/upload-image", (req, res) => {
    upload.single("image")(req, res, (err) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }
        // check if file is uploaded
        if(!req.file){
            return res.status(400).json({
                success:false,
                message:"No file uploaded"
            });
        }
        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        // http://localhost:8000/uploads/image-123.jpg
        console.log(imageUrl);

        // send this url to frontend
        res.status(200).json({
            success:true,
            message:"Image uploaded successfully", 
            image:imageUrl
        });
    });
});


export default router;