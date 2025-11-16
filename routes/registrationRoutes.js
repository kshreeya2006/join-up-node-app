import express from "express";
import registrationModel from "../models/registrationModel.js";

const registrationRouter = express.Router();

// Register for a new event
registrationRouter.post("/new", async (req, res) => {
  const { userEmail, eventId, phone, teamMembers, teamSize } = req.body;

  try {
    // Prevent duplicate registration
    const exists = await registrationModel.findOne({ userEmail, eventId });
    if (exists) {
      return res.status(400).json({ message: "Already registered for this event" });
    }

    const result = await registrationModel.create({
      userEmail,
      eventId,
      phone,
      teamMembers,
      teamSize,
    });

    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Failed to register for event", error });
  }
});

// Get all registrations of a user
registrationRouter.get("/:email", async (req, res) => {
  const email = req.params.email;

  try {
    const result = await registrationModel.find({ userEmail: email });
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch registered events", error });
  }
});

export default registrationRouter;
