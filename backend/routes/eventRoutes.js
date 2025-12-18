import express from "express";
import Event from "../models/Event.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const event = new Event({ ...req.body, createdBy: req.userId });
  await event.save();
  res.json(event);
});

router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post("/:id/rsvp", auth, async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event.attendees.includes(req.userId))
    return res.status(400).json({ msg: "Already RSVP'd" });

  if (event.attendees.length >= event.capacity)
    return res.status(400).json({ msg: "Event full" });

  event.attendees.push(req.userId);
  await event.save();

  res.json({ msg: "RSVP successful" });
});

export default router;