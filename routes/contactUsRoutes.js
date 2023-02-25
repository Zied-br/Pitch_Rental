const router = require("express").Router();
const contactUsCtrl = require("../controllers/contactUsCtrl");
const adminAuth = require("../middleWares/adminAuth");
const { validationCheck } = require("../middleWares/dataCheck");

router.post("/sendMessage", validationCheck, contactUsCtrl.sendMessage);
router.get("/getMessages", adminAuth, contactUsCtrl.getMessages);
router.delete("/deleteMessage/:id", adminAuth, contactUsCtrl.deleteMessage);

module.exports = router;
