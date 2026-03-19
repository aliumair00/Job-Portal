import User from "../model/User.js";
import jwt from "jsonwebtoken";

//Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
}

//Register User
export const register = async(req,res)=>{
    try{
        const {name,email,password,role,avatar} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }
        const user = await User.create({
            name,
            email,
            password,
            role,
            avatar
        })
        res.status(201).json({
            success:true,
            message:"User created successfully",
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            token: generateToken(user._id),
            companyName: user.companyName || "",
            companyDescription: user.companyDescription || "",
            companyLogo: user.companyLogo || "",
            resume: user.resume || "",
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

//Login User    
export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"Invalid User"
            })
        }
        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(401).json({
                success:false,
                message:"Invalid email or password"
            })
        }
        res.status(200).json({
            success:true,
            message:"User logged in successfully",
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            token: generateToken(user._id),
            companyName: user.companyName || "",
            companyDescription: user.companyDescription || "",
            companyLogo: user.companyLogo || "",
            resume: user.resume || "",
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

export const getMe = async(req,res)=>{
  res.json(req.user);
}

export default {register, login, getMe}

