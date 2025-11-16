import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  department: { type: String },   // NEW FIELD
});

export default mongoose.model("User", userSchema);
