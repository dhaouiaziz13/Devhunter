const router = require("express").Router();
const portfoliocontroller=require('../controllers/portfoliocontroller')

router.post("/portfolio/:id", portfoliocontroller.getPortfolio);



module.exports = router;
