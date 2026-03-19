import jwt from "jsonwebtoken";
import User from "../model/User.js";

export const protect = async (req, res, next) => {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer")) {
        try {
            token = token.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const user = await User.findById(decoded.id).select("-password");

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: "User not found",
                });
            }

            req.user = user;
            return next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Not authorized, token failed",
            });
        }
    }

    return res.status(401).json({
        success: false,
        message: "Not authorized, no token",
    });
};

export default protect;
