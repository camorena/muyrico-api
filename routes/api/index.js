const router = require("express").Router();
const foodRoutes = require("./foods");

// Food routes
router.use("/foods", foodRoutes);

module.exports = router;
