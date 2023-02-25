import React from "react";
import "../imageGroup/imageGroup.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pitch1 from "../../helpers/images/pitch1.jpg";
import pitch2 from "../../helpers/images/pitch2.jpg";
import pitch3 from "../../helpers/images/pitch3.jpg";
import pitch4 from "../../helpers/images/pitch4.jpg";
import pitch5 from "../../helpers/images/pitch5.jpg";
import pitch6 from "../../helpers/images/pitch6.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ImageGroup = () => {
  return (
    <Carousel responsive={responsive} className="Carousel">
      <img src={pitch1} alt="pitch1" className="imgPitch" />
      <img src={pitch2} alt="pitch2" className="imgPitch" />
      <img src={pitch3} alt="pitch3" className="imgPitch" />
      <img src={pitch4} alt="pitch4" className="imgPitch" />
      <img src={pitch5} alt="pitch5" className="imgPitch" />
      <img src={pitch6} alt="pitch6" className="imgPitch" />
    </Carousel>
  );
};

export default ImageGroup;
