import React, { useEffect } from "react";
import "./Booking.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import BookingForm from "../../components/Booking/BookingForm";
import getDate from "../../helpers/getDate";

import { useDispatch, useSelector } from "react-redux";
import { getBookings } from "../../redux/Actions/bookingActions";

const Booking = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());

    // eslint-disable-next-line
  }, []);

  const allbookings = useSelector((state) => state.bookingReducer.bookings);
  //Bookings setup

  const getAllBookings = allbookings.map((el) => {
    return {
      title: el.squadName,
      start: getDate(el.start),
    };
  });

  return (
    <div className="calender">
      <BookingForm />
      <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        themeSystem="Simplex"
        plugins={[dayGridPlugin]}
        events={getAllBookings}
      />
    </div>
  );
};
export default Booking;
