const express = require("express");
const authMiddleWare = require("../middleware/authMiddleware");
const postController = require("../controllers/postController");

const router = express.Router();

router.post("/post", authMiddleWare, postController.createPost);
router.get("/post", authMiddleWare, postController.getPosts);
router.delete("/post/:postId", authMiddleWare, postController.deletePost);
router.put("/post/:postId", authMiddleWare, postController.updatePost);
router.post("/post/:postId/comment", authMiddleWare, postController.addComment);

module.exports = router;
