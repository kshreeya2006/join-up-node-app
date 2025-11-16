import express from "express";
import userModel from "../models/userModel.js";

const userRouter = express.Router();

// Hardcoded admin
const ADMIN = {
  email: "admin@eventtracker.com",
  password: "admin123"
};

userRouter.post("/register", async (req, res) => {
  const { name, email, password, department } = req.body;

  // Block registering the admin account
  if (email === ADMIN.email) {
    return res.status(400).json({ message: "Admin account already exists" });
  }

  try {
    const result = await userModel.create({
      name,
      email,
      password,
      department
    });

    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Registration failed", error });
  }
});


userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Check for admin login first
  if (email === ADMIN.email && password === ADMIN.password) {
    return res.json({ 
      name: "Admin",
      email: ADMIN.email,
      role: "admin" 
    });
  }

  // Otherwise check normal users
  const result = await userModel.findOne({ email, password });

  if (!result) return res.json({ message: "Invalid user or password" });

  return res.json({ 
    ...result.toObject(),
    role: "user" 
  });
});

export default userRouter;
