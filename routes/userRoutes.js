const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleWare = require("../middleware/authMiddleware");

router.get("/profile/:userId", authMiddleWare, userController.getUserProfile);
router.put(
  "/profile/:userId",
  authMiddleWare,
  userController.updateUserProfile
);

module.exports = router;
