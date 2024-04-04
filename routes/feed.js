const express = require("express");

const feedController = require("../controllers/feed");

const router = express.Router();

// GET "/feed/posts"   <=== ở app.js có thêm vào "/feed" nên đường dẫn đầy đủ là đây!
router.get("/posts", feedController.getPosts);

// Post "/feed/post"
router.post("/post", feedController.createPost);

module.exports = router;
