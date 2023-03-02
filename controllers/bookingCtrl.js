const Booking = require("../models/bookingSchema");

const bookingCtrl = {
  addBooking: async (req, res) => {
    try {
      const { squadName, start, code } = req.body;
      const timinig = await Booking.findOne({ start });
      if (timinig)
        return res.status(400).json({
          errors: [
            `This time slot is already booked by another user. Please select a different time slot!!`,
          ],
        });
      const newBooking = new Booking({
        squadName,
        start,
        code,
      });

      const booking = await newBooking.save();
      res.json(booking);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getBookings: async (req, res) => {
    try {
      const allBookings = await Booking.find();
      res.json(allBookings);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteBooking: async (req, res) => {
    try {
      const deleteBooking = await Booking.findOneAndDelete({
        squadName: req.params.squadName,
      });
      res.json(deleteBooking);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateBooking: async (req, res) => {
    try {
      const updatedBooking = await Booking.findOneAndUpdate(
        {
          squadName: req.params.squadName,
        },
        {
          ...req.body,
        },
        { new: true }
      );

      res.json(updatedBooking);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = bookingCtrl;
