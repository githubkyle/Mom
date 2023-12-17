const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// Get comments for a specific project
router.get("/comments/:Cluster0", async (req, res) => {
  try {
    const comments = await Comment.find({ projectId: req.params.projectId });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Add a new comment
router.post("/comments", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
