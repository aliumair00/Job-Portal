import mongoose from "mongoose";

const savedJobSchema = new mongoose.Schema(
    {
      JobSeeker:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
      },
      Job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job",
        required:true 
      }
    },
    {timestamps:true}
);

export default mongoose.model("SavedJob", savedJobSchema);

