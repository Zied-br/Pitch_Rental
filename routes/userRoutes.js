const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

const { validationCheck } = require("../middleWares/dataCheck");
const auth = require("../middleWares/auth");

router.post("/register", validationCheck, userCtrl.register);
router.post("/login", validationCheck, userCtrl.login);
router.get("/userProfile", auth, userCtrl.getUserProfile);
module.exports = router;
