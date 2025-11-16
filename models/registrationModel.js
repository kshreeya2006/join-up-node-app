import mongoose from "mongoose";

const registrationSchema = mongoose.Schema({
  userEmail: { type: String, required: true },

  // Make this a reference to the Event model
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },

  // Registration form fields
  phone: { type: String, required: true },
  teamMembers: { type: [String], default: [] },   // array of member names
  teamSize: { type: Number, default: 1 },

  registeredOn: { type: Date, default: Date.now },
});

export default mongoose.model("Registration", registrationSchema);
