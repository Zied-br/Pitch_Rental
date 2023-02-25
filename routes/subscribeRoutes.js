const router = require("express").Router();
const subscribeCtrl = require("../controllers/subscribeCtrl");
const adminAuth = require("../middleWares/adminAuth");
const { validationCheck } = require("../middleWares/dataCheck");

router.post("/newSubscription", validationCheck, subscribeCtrl.newSubscription);
router.get("/getSubscriptions", adminAuth, subscribeCtrl.getSubscriptions);
router.delete(
  "/deleteSubscription/:id",
  adminAuth,
  subscribeCtrl.deleteSubscription
);

module.exports = router;
