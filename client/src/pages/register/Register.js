import "../register/Register.css";
import { MDBInput } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/Actions/authActions";
import userImage from "../../helpers/images/user.png";
import { useNavigate } from "react-router-dom";
import registerimg from "../../helpers/images/register.png";
import Alert from "../../components/Alert/Alert";

const Register = () => {
  //alert Message
  const [error, setError] = useState("");
  //img reader
  const [selectedImg, setSelectedImg] = useState("");
  const handleChangeImg = (e) => {
    e.preventDefault();
    if (e.target.files.length) {
      const myImg = e.target.files[0];
      //create reader to convert img to file
      const reader = new FileReader();
      reader.readAsDataURL(myImg);
      reader.onload = () => {
        setSelectedImg(reader.result);
        setRegInfo({ ...regInfo, image: reader.result });
      };
    }
  };
  //password show
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  //inputs state
  const [regInfo, setRegInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cinNumber: "",
    phoneNumber: "",
  });
  //register
  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(regInfo));
    if (
      !regInfo.email ||
      !regInfo.password ||
      !regInfo.firstName ||
      !regInfo.lastName ||
      !regInfo.cinNumber ||
      !regInfo.phoneNumber
    ) {
      setError("Please fill in all fields");
      return;
    }
    setError("The CIN number and phone number must have exactly 8 digits");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setRegInfo({ ...regInfo, [e.target.name]: e.target.value });
  };

  //authorisation
  const auth = useSelector((state) => state.authReducer);

  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuth === true) {
      navigate("/profile");
    }
  }, [navigate, auth.isAuth]);

  return (
    <div>
      <div className="Register">
        <h1>Register</h1>

        <div>
          <div className="d-flex justify-content-center mb-4 ">
            <img
              src={selectedImg === "" ? userImage : selectedImg}
              className="rounded-circle"
              alt="example placeholder"
              style={{ width: "100px" }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="btn btn-primary btn-rounded">
              <label
                className="form-label text-white m-1"
                htmlFor="customFile2"
              >
                {selectedImg === "" ? "Add picture" : "Change it"}
              </label>

              <input
                type="file"
                className="form-control d-none"
                id="customFile2"
                onChange={handleChangeImg}
              />
            </div>
          </div>
        </div>

        <form>
          {/*   <!-- 2 column grid layout with text inputs for the first and last names --> */}
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <MDBInput
                  name="firstName"
                  label="First name"
                  type="text"
                  id="form3Example1"
                  className="form-control upform"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <MDBInput
                  name="lastName"
                  label="Last name"
                  type="text"
                  id="form3Example2"
                  className="form-control upform"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/*   <!-- Email input --> */}
          <div className="form-outline mb-4">
            <MDBInput
              name="email"
              label="Email adresse"
              type="email"
              id="form3Example3"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          {/*  <!-- Password input --> */}
          <div className="form-outline mb-4">
            <i
              className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"}
              onClick={togglePassword}
              style={{
                visibility: regInfo.password === "" ? "hidden" : "visible",
              }}
            />
            <MDBInput
              name="password"
              label="Password"
              type={passwordShown ? "text" : "password"}
              id="form3Example4"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          {/*  <!-- cinNumber input --> */}
          <div className="form-outline mb-4">
            <MDBInput
              name="cinNumber"
              label="Cin number"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          {/*  <!-- phone Number input --> */}
          <div className="form-outline mb-4">
            <MDBInput
              name="phoneNumber"
              label="Phone number"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          {/*  <!-- Checkbox --> */}
          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example33"
            />
            <label className="form-check-label">
              Subscribe to our newsletter
            </label>
          </div>

          {/* <!-- Submit button --> */}
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4"
            onClick={handleRegister}
          >
            Sign up
          </button>
          {error && <Alert message={error} />}
          {/*   <!-- Register buttons --> */}
          <div className="text-center">
            <p>or sign up with:</p>
            <button
              type="button"
              className="btn btn-secondary btn-floating mx-1"
            >
              <i className="fab fa-facebook-f"></i>
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-floating mx-1"
            >
              <i className="fab fa-google"></i>
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-floating mx-1"
            >
              <i className="fab fa-twitter"></i>
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-floating mx-1"
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
      <img className="registerimg" src={registerimg} alt="registerimg" />
    </div>
  );
};

export default Register;
