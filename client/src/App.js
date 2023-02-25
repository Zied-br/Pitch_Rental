import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./pages/profile/Profile";
import PostList from "./components/Posts/PostList";
import Booking from "./pages/Booking/Booking";
import ContactUs from "./pages/contactUs/ContactUs";
import MessageBox from "./pages/messageBox/MessageBox";
import Subscribe from "./pages/subscribe/Subscribe";
import SubscriptionList from "./pages/SubscriptionList/SubscriptionList";
import AboutUs from "./pages/aboutus/AboutUs";
import Localisation from "./pages/Localisation/Localisation";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/messagesbox" element={<MessageBox />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/subscriptionlist" element={<SubscriptionList />} />
        <Route path="/localisation" element={<Localisation />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      <footer>
        <div className="footercontainer">
          <p className="footerparagraph">
            &copy; 2023 Pitch Rental by Zied Ben Rejeb
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
