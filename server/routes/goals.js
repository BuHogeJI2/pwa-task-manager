const express = require("express");
const router = express.Router();
const Goals = require("../models/Goal");

// GET all events
router.get("/", async (req, res) => {
  try {
    const goals = await Goals.find();
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
