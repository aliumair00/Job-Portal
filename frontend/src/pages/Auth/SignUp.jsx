import React from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Mail,
  Lock,
  Upload,
  Eye,
  EyeOff,
  UserCheck,
  Building2,
  CheckCircle,
  AlertCircle,
  Loader
}
from "lucide-react";
import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData]= useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    avtar: null,
  });
  const [formState, setFormState] = useState({
    loading:false,
    errors:{},
    showPassword: false,
    avatarPreview: null,
    success:false
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formState.errors[name]) {
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: "" },
      }));
    }
  };

  const handleRoleChange =(role)=>{

  }

  const handleAvatarChange =(e)=>{

  }

  const validateForm =()=>{
    
  }

  const handleSubmit = async(e)=>{
      if (formState.success) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 ">
            <motion.div
            initial={{opacity:0,scale:0.9 }}
            animate={{opacity:1, scale:1}}
            className="bg-white p-8 shadow-lg w-full max-w-md text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Created!</h2>
              <p className="text-gray-600 mb-4" >
                Welcome to JobPortal! Your account has been created successfully.
              </p>
              <div className="animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto  "></div>
              <p className="text-gray-500 mt-2">Redirecting to your dashboard... </p>
    
            </motion.div>
            
          </div>
        )
      }
  }
  return (
    <div>SignUp</div>
  )
}

export default SignUp