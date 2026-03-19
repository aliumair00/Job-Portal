import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobroutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//middleware to handle CORS
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true 
}));
app.use(express.json());

dotenv.config();
connectDB();

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/user",userRoutes)
app.use("/api/jobs",jobRoutes)


// Serve uploaded folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"),{}));

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});






