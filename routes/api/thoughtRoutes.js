const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// router.get('/thoughts', getAllThoughts);
// router.post('/thoughts', createThought);

router.route("/").get(getAllThoughts).post(createThought);


// router.get("/thoughts/:id", getThoughtById);
// router.put("/thoughts/:id", updateThought);
// router.delete("/thoughts/:id", deleteThought);

router
  .route('/thoughts/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


//   router.post("/thoughts/:thoughtId/reactions/:reactionId", addReaction);
//   router.delete("/thoughts/:thoughtId/reactions/:reactionId", removeReaction);


  router
  .route('/thoughts/:thoughtId/reactions/:reactionId')
  .post(addReaction)
  .delete(removeReaction);


module.exports = router;
