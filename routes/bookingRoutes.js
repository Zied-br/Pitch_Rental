const router = require("express").Router();
const bookingCtrl = require("../controllers/bookingCtrl");
const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

router.post("/addNewBooking", auth, bookingCtrl.addBooking);
router.get("/allBookings", auth, bookingCtrl.getBookings);
router.delete(
  "/deleteBooking/:squadName",
  adminAuth,
  bookingCtrl.deleteBooking
);
router.put("/updateBooking/:squadName", adminAuth, bookingCtrl.updateBooking);

module.exports = router;
