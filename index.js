import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./routes/userRoutes.js";
import eventRouter from "./routes/eventRoutes.js";
import registrationRouter from "./routes/registrationRoutes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRouter);
app.use("/events", eventRouter);
app.use("/registrations", registrationRouter);

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("DB Error:", error));

export default app;  
