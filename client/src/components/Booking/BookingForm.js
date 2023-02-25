import React, { useState, useEffect } from "react";
import "./BookingForm.css";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Modal } from "react-bootstrap";
import {
  addNewBooking,
  deletebooking,
  updateBooking,
} from "../../redux/Actions/bookingActions";
import { v4 as uuidv4 } from "uuid";

const BookingForm = () => {
  //Modal state for user code
  const [show, setShow] = useState(false);
  //Modal state for admin
  const [showCode, setShowCode] = useState(false);

  //selecting authReducer
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [newBooking, setNewBooking] = useState({
    squadName: "",
    start: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (e) => {
    e.preventDefault();
    setNewBooking({
      ...newBooking,
      [e.target.name]: e.target.value,
    });
  };

  const [addBooking, setAddBooking] = useState({
    squadName: newBooking.squadName,
    start: String(startDate).slice(0, 15) + " " + newBooking.start,
    code: uuidv4(),
  });
  useEffect(() => {
    setAddBooking({
      squadName: newBooking.squadName,
      start: String(startDate).slice(0, 15) + " " + newBooking.start,
      code: uuidv4(),
    });
  }, [newBooking, startDate]);

  const handleAddBooking = (e) => {
    e.preventDefault();
    dispatch(addNewBooking(addBooking));

    setNewBooking({ squadName: "", start: "" });
    setStartDate(new Date());
    setShow(true);
  };

  //deleteing
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletebooking(newBooking.squadName));
    setNewBooking({ squadName: "" });
  };
  //updating
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateBooking(newBooking.squadName, addBooking));

    setNewBooking({ squadName: "", start: "" });
    setStartDate(new Date());
  };
  //finding booking code for admin
  const bookings = useSelector((state) => state.bookingReducer.bookings);

  const bookingCode = bookings
    .filter((elem) => elem.squadName === addBooking.squadName)
    .map((elem) => elem.code);

  return (
    <div>
      {/*   user code generator modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Booking with success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your code is : <b>{addBooking.code} </b> <br />
            <br />
            <em>
              Please save this code so that you can use it to access the match
              on the day of the booking.
            </em>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShow(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      {/*   showing admin code */}
      <Modal show={showCode} onHide={() => setShowCode(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{addBooking.squadName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {bookingCode.length > 0 ? (
            <p>
              The check code is : <b> {bookingCode}</b> <br />
              <br />
            </p>
          ) : (
            <p> This team has no booking !! </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowCode(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="bookingForm">
        <form className="row row-cols-lg-auto g-3 align-items-center">
          <div className="col-12">
            <div className="input-group ">
              <input
                name="squadName"
                type="text"
                className="form-control hi"
                id="inlineFormInputGroupUsername"
                placeholder="Squad Name"
                onChange={handleChange}
                value={newBooking.squadName}
              />
            </div>
          </div>

          <div>
            <i className="far farbooking fa-2x fa-calendar-check"></i>

            <DatePicker
              className="datePicker "
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
            ></DatePicker>
          </div>

          <div className="col-12">
            <Form.Select
              aria-label="Default select example"
              name="start"
              onChange={handleChange}
              value={newBooking.start}
            >
              <option>Select Timing</option>
              <option value="17:00">17:00</option>
              <option value="18:30">18:30</option>
              <option value="20:00">20:00</option>
              <option value="21:30">21:30</option>
            </Form.Select>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleAddBooking}
            >
              Booking
            </button>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                display:
                  auth.user === null || auth.user.role === 0 ? "none" : true,
              }}
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                setShowCode(true);
                e.preventDefault();
              }}
              style={{
                display:
                  auth.user === null || auth.user.role === 0 ? "none" : true,
              }}
            >
              Show Code
            </button>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-danger"
              style={{
                display:
                  auth.user === null || auth.user.role === 0 ? "none" : true,
              }}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
