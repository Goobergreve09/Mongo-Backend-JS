const { Thought } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.error("Error in getAllThoughts:", err);
        res.status(500).json(err);
      });
  },

  getThoughtById(req, res) {
    const { thoughtId } = req.params;
    console.log("Thought ID:", thoughtId);
    Thought.findById(thoughtId)
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "Thought not found" });
          return;
        }
        res.json(thought);
      })
      .catch((err) => res.status(500).json(err));
  },

  createThought(req, res) {
    const { thought_text, username_thought } = req.body; // Correct property names used here
    console.log("thought_text", thought_text);
    console.log("username:", username_thought);
    Thought.create({ thought_text, username_thought }) // Use the destructured variables directly
      .then((newThought) => res.status(201).json(newThought))
      .catch((err) => {
        console.log(err); // Log the error
        res.status(400).json(err);
      });
  },

  updateThought(req, res) {
    const { thoughtId } = req.params;
    const { thought_text } = req.body; // Correct property name used here
    console.log(thought_text);
    Thought.findByIdAndUpdate(thoughtId, { thought_text }, { new: true })
      .then((updatedThought) => {
        if (!updatedThought) {
          res.status(404).json({ message: "Thought not found" });
          return;
        }
        res.json(updatedThought);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteThought(req, res) {
    const { thoughtId } = req.params;
    Thought.findByIdAndDelete(thoughtId)
      .then((deletedThought) => {
        if (!deletedThought) {
          res.status(404).json({ message: "Thought not found" });
          return;
        }
        res.json(deletedThought);
      })
      .catch((err) => res.status(400).json(err));
  },

  addReaction(req, res) {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;
    Thought.findByIdAndUpdate(
      thoughtId,
      { $push: { reactions: { reactionBody, username } } },
      { new: true }
    )
      .then((updatedThought) => {
        if (!updatedThought) {
          res.status(404).json({ message: "Thought not found" });
          return;
        }
        res.json(updatedThought);
      })
      .catch((err) => res.status(400).json(err));
  },

  removeReaction(req, res) {
    const { thoughtId, reactionId } = req.params;
    Thought.findByIdAndUpdate(
      thoughtId,
      { $pull: { reactions: { _id: reactionId } } },
      { new: true }
    )
      .then((updatedThought) => {
        if (!updatedThought) {
          res.status(404).json({ message: "Thought not found" });
          return;
        }
        res.json(updatedThought);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = thoughtController;
