const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

// add prefixes /users and /thought to routes
router.use("/users", userRoutes);
router.use("/comments", thoughtRoutes);

module.exports = router;