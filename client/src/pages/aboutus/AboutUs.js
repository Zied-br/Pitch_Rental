import React from "react";
import aboutusimg from "../../helpers/images/aboutus.png";
import "../aboutus/AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutus">
        <h1> About Us</h1>
        <div className="aboutuscard">
          <p className="aboutustext">
            "Welcome to Pitch Rental, your go-to platform for booking pitches
            online. We are dedicated to making it easy and convenient for sports
            enthusiasts, event organizers, and anyone in need of a space to find
            and rent the perfect pitch for their needs. <br /> <br />
            <br />
            At Pitch Rental, we understand the importance of having access to
            high-quality pitches for sports, recreational activities, and
            events. That's why we've made it our mission to connect you with a
            wide range of pitches that meet your specific requirements. From
            football fields and basketball courts to tennis courts and cricket
            pitches, we've got you covered. Our team is made up of experienced
            professionals who are passionate about sports and recreation. We use
            our expertise to carefully select and curate a diverse range of
            pitches that meet the highest standards of quality, safety, and
            accessibility. <br />
            <br />
            <br /> We also prioritize your convenience and ease of use. Our
            platform is user-friendly and intuitive, allowing you to easily
            search, compare, and book pitches online. With our streamlined
            booking process, you can quickly and securely reserve the pitch you
            need with just a few clicks. At Pitch Rental, we are committed to
            providing exceptional customer service and support.
            <br /> <br />
            <br />
            Our friendly and knowledgeable team is always available to answer
            your questions, offer advice, and ensure that your rental experience
            is hassle-free. Thank you for choosing Pitch Rental for your pitch
            rental needs. We look forward to serving you!"
          </p>
        </div>
      </div>
      <img className="aboutusimg" src={aboutusimg} alt="aboutusimg" />
    </div>
  );
};

export default AboutUs;
