import express from "express";
import eventModel from "../models/eventModel.js";

const eventRouter = express.Router();

// Get all events
eventRouter.get("/all", async (req, res) => {
  try {
    const events = await eventModel.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error });
  }
});

// Create a new event (admin use)
eventRouter.post("/new", async (req, res) => {
  try {
    const event = req.body;
    const createdEvent = await eventModel.create(event);
    res.json(createdEvent);
  } catch (error) {
    res.status(500).json({ message: "Failed to create event", error });
  }
});

export default eventRouter;
