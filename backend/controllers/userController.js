import User from "../model/User.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Update Profile
export const updateProfile = async(req,res)=>{
    try{
        const {name,avatar,resume,companyName,companyDescription,companyLogo} = req.body;
        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        user.name = name || user.name;
        user.avatar = avatar || user.avatar;
        user.resume = resume || user.resume;

//If employer so allow updating company info
        if(user.role === "employer"){
            user.companyName = companyName || user.companyName;
            user.companyDescription = companyDescription || user.companyDescription;
            user.companyLogo = companyLogo || user.companyLogo;
        }
        await user.save();

        res.status(200).json({
            success:true,
            message:"Profile updated successfully",
            _id:user._id,
            name:user.name,
            role:user.role,
            avatar:user.avatar,
            resume:user.resume || "",
            companyName:user.companyName,
            companyDescription:user.companyDescription,
            companyLogo:user.companyLogo
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"internal server error",
            error: error.message
        })
    }
}

export const deleteResume = async(req,res)=>{
    try{
        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        if(user.role !== "jobseeker" ){
            return res.status(403).json({
                success:false,
                message:"only joobseeker can delete resume"
            })
        }

        if(!user.resume) {
            return res.status(400).json({
                success: false,
                message: "No resume found to delete"
            })
        }

        const fileName = user.resume.split('/').pop();
        const filePath = path.join(__dirname, "../uploads", fileName);
        if(fs.existsSync(filePath)){
            fs.unlinkSync(filePath); //delete file from server
        }
        user.resume = "";
        await user.save();

        res.status(200).json({
            success:true,
            message:"Resume deleted successfully"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"internal server error",
            error: error.message
        })
    }
}

//Get Public Profile
export const getPublicProfile = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id).select("-password");
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        res.status(200).json({
            success:true,
            user
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"internal server error",
            error: error.message
        })
    }
}