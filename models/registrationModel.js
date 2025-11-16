import mongoose from "mongoose";

const registrationSchema = mongoose.Schema({
  userEmail: { type: String, required: true },          // instead of email
  eventId: { type: String, required: true },            // event the user registered for
  registeredOn: { type: Date, default: Date.now },      // same as your orderDate
});

export default mongoose.model("Registration", registrationSchema);
