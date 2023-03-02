import "../login/Login.css";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/Actions/authActions";
import loginimg from "../../helpers/images/loginimg.png";
import Alert from "../../components/Alert/Alert";

const Login = () => {
  //alert Message
  const [error, setError] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  //authorisation
  const auth = useSelector((state) => state.authReducer);

  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuth === true) {
      navigate("/profile");
    }
  }, [navigate, auth.isAuth]);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(info));
    if (auth.errors) {
      if (!info.email || !info.password) {
        setError("Please fill in all fields");
        return;
      }
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="Login">
        <h1>Login</h1>

        <form>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <MDBInput
              label="Email address"
              type="email"
              id="form2Example1"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <i
              className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"}
              onClick={togglePassword}
              style={{
                visibility: info.password === "" ? "hidden" : "visible",
              }}
            />
            <MDBInput
              label="Password"
              type={passwordShown ? "text" : "password"}
              id="form2Example2"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
          </div>

          {/*   <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example34"
                />
                <label className="form-check-label"> Remember me </label>
              </div>
            </div>

            <div className="col">{/*  <!-- Simple link --> */}</div>
          </div>

          {/*   <!-- Submit button --> */}
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4"
            onClick={handleLogin}
          >
            Sign in
          </button>
          {auth.isAuth === false && error ? <Alert message={error} /> : null}

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>

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
      <img className="loginimg" src={loginimg} alt="loginimg" />
    </div>
  );
};

export default Login;
