import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/Actions/authActions";

import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const auth = useSelector((state) => state.authReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuth === false) {
      navigate("/");
    }

    // eslint-disable-next-line
  }, [auth.isAuth]);
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/*  <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/*    <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/*  <!-- Left links --> */}
            <ul className="navmargin navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link"
                  style={{ display: auth.isAuth ? "none" : true }}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="nav-link"
                  style={{ display: auth.isAuth ? "none" : true }}
                >
                  Register
                </Link>{" "}
              </li>
              <li>
                <Link
                  to="/profile"
                  className="nav-link"
                  style={{ display: auth.isAuth ? true : "none" }}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/posts"
                  className="nav-link"
                  style={{ display: auth.isAuth ? true : "none" }}
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="nav-link"
                  style={{ display: auth.isAuth ? true : "none" }}
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  to="/subscribe"
                  className="nav-link"
                  style={{ display: auth.isAuth ? true : "none" }}
                >
                  Subscribe
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contactus" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/messagesbox"
                  className="nav-link"
                  style={{
                    display:
                      auth.user === null || auth.user.role === 0
                        ? "none"
                        : true,
                  }}
                >
                  Messages Box
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/subscriptionlist"
                  className="nav-link"
                  style={{
                    display:
                      auth.user === null || auth.user.role === 0
                        ? "none"
                        : true,
                  }}
                >
                  Subscriptions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={handleLogout}
                  style={{ display: auth.isAuth ? true : "none" }}
                >
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/localisation" className="nav-link">
                  Map
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
