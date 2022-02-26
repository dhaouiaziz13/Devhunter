const router = require("express").Router();
const postcontroller =require('../controllers/postcontroller')

router.post("/makepost", postcontroller.makePost);
router.post("/makecomment", postcontroller.makeComment);


module.exports = router;
