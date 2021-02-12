const router = require("express").Router();
const {
  postNewThought,
  getAllThoughts,
  getThoughtById,
  updateThoughtById,
} = require("../../controllers/thought-controller");

// api/thoughts/
router.route("/").post(postNewThought).get(getAllThoughts);

// api/thoughts/:id
router.route("/:id").get(getThoughtById).put(updateThoughtById);

// api/thoughts/:userId/:thoughtId

router.route("/:userId/:thoughtId").put(updateThoughtById);

module.exports = router;
