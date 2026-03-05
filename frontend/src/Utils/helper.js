export const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email address";
    return "";
  };

  export const validatePassword = (password) => {
    if (!password.trim()) return "Password is required";
    if (password.length < 8) return "Password must contain at least 8 characters";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
    if (!/[0-9]/.test(password)) return "Password must contain at least one number";
    if (!/[!@#$%^&*]/.test(password)) return "Password must contain at least one special character";
    return "";
  };

  export const validateAvatar = (file) => {
    if (!file) return "";
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/jpg"];
    if (!allowedTypes.includes(file.type)) return "Invalid file type";
    const maxFileSize = 5 * 1024 * 1024;
    if (file.size > maxFileSize) return "File size must be less than 5MB";
    return "";
  };