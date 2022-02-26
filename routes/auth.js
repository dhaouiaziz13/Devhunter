const router = require("express").Router();
const authcontroller=require('../controllers/authcontroller')

router.post("/login", authcontroller.login);
router.post("/signup", authcontroller.Signup);
router.post("linkMail", authcontroller.linkmail);
router.post("/logout", authcontroller.logout);


module.exports = router;
