import "../homePage/homePage.css";
import pitch from "../../helpers/images/pitch.jpg";

import HomePageVideo from "../../helpers/images/HomePageVideo.mp4";
import { Card } from "react-bootstrap";
import ImageGroup from "../../components/imageGroup/ImageGroup";

const HomePage = () => {
  return (
    <div>
      <img className="Pitch" src={pitch} alt="pitch" />
      <div className="headerhome">
        <video autoPlay muted>
          <source src={HomePageVideo} type="video/mp4"></source>
        </video>

        <h1 className="hometitle1">
          Register <span>100%</span> of your online reservations
        </h1>
        <h3 className="hometitle1">
          <em>
            Offer your members a simple and efficient online court reservation
            system
          </em>
        </h3>
        <br />
        <br />

        <h4 className="hometitle1">
          Time saving || Quickness || UpToDate || Simplicity
        </h4>
        <br />
        <br />
        <ul className="contact-usitems">
          <b>Contact Us : </b>
          <div>
            <i className="fa fa-phone"></i> Phone Number : 55-566-054
          </div>
          <div>
            <i className="fa fa-envelope"></i> Email : Zied@gmail.com
          </div>
          <div>
            <i className="fa fa-map-marker"></i> Local : Sahloul , Sousse,
            Tunisia
          </div>
        </ul>
      </div>
      <div className="Cards">
        <Card className="Card">
          <Card.Body>
            <i className="far fa-5x fa-calendar-check  farhome"></i>
            <Card.Title className="cardtitle">online booking</Card.Title>
            <Card.Text>
              Your members book 24/7 online in complete autonomy.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="Card">
          <Card.Body>
            <i className="far fa-5x fa-credit-card  farhome"></i>
            <Card.Title className="cardtitle">Online payment</Card.Title>
            <Card.Text>
              Subscription with quota, prepaid card of 10+2 rentals, Bancontact
              , credit card, offer as many possibilities as you wish.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="Card">
          <Card.Body>
            <i className="far fa-5x fa-calendar-alt farhome"></i>
            <Card.Title className="cardtitle">
              Real-time availability
            </Card.Title>
            <Card.Text>
              Athletes easily cross-check their agenda with the availability of
              the center to organize their next sessions.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <ImageGroup></ImageGroup>
      <section className="perfect-pitch-section">
        <h2 className="perfect-pitch-section__title">
          Discover Your Perfect Pitch with Pich Rental
        </h2>
        <p className="perfect-pitch-section__text">
          Find your perfect pitch today and take your sports game to the next
          level!
        </p>
        <p className="perfect-pitch-section__text">
          Discover a wide range of high-quality pitches for all your sports and
          recreation needs.
        </p>
        <p className="perfect-pitch-section__text">
          Say goodbye to the hassle of finding and booking pitches - our
          platform makes it easy and convenient.
        </p>
        <p className="perfect-pitch-section__text">
          Experience exceptional customer service and support from our
          passionate team of professionals.
        </p>
        <p className="perfect-pitch-section__text">
          Book your pitch today and get ready to play!
        </p>
      </section>
    </div>
  );
};

export default HomePage;
