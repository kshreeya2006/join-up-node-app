import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  eid: { type: Number },                     // optional event ID similar to pid
  name: { type: String, required: true },
  date: { type: String, required: true },
  venue: { type: String, required: true },
  prize: { type: String, required: true },
  regAmount: { type: Number, required: true },
  teamSize: { type: Number, required: true },
  lastDate: { type: String, required: true },
  organiserContact: { type: String, required: true },   // ⭐ new field added
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Event", eventSchema);
