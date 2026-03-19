import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
    updateProfile,
    deleteResume,
    getPublicProfile
} from "../controllers/userController.js";

const router = express.Router();

//protected routes 
router.put("/profile",protect,updateProfile)
router.delete("/resume",protect,deleteResume)

//public routes
router.get("/:id",getPublicProfile)


export default router;