const router = require("express").Router();
const {
  getAllUsers, postNewUser, getUserById, updateUserById, deleteUserById
} = require("../../controllers/user-controller");

// api/users/
router.route("/").get(getAllUsers).post(postNewUser);

// api/users/:id
router.route("/:id").get(getUserById).put(updateUserById).delete(deleteUserById);

module.exports = router;
