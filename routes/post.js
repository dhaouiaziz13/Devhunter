const router = require("express").Router();
const postcontroller = require("../controllers/postcontroller");

router.post("/makepost", postcontroller.makePost);
router.post("/makecomment", postcontroller.makeComment);
router.post("/deletepost/:id", postcontroller.deletePost);
router.post("/deletecomment/:id", postcontroller.deleteComment);
router.post("/getposts/:id",postcontroller.getPosts)

module.exports = router;
