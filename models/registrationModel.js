import mongoose from "mongoose";

const registrationSchema = mongoose.Schema({
  userEmail: { type: String, required: true },
  eventId: { type: String, required: true },

  // NEW FIELDS (for your registration form)
  phone: { type: String, required: true },
  teamMembers: { type: [String], default: [] },   // array of member names
  teamSize: { type: Number, default: 1 },

  registeredOn: { type: Date, default: Date.now },
});

export default mongoose.model("Registration", registrationSchema);
