import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

// import kProfile from "../img/nat-8.jpg";
import hstew from "../img/potlucker-header-stew.jpg";
import hgroup from "../img/potlucker-header-image.jpg";

function Aboutus() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-firstbox">
        <div className="aboutus-main">
          <br/>
          <span className="title-main">
            <h1>Potluck made easy</h1>
          </span>
          <br />
          <p>
            <i>
              One cannot think well, love well, sleep well, if one has not dined
              well.
            </i>{" "}
            Virginia Woolf
          </p>
          <br />
          <p>
            Organizing potlucks can be challenging. You need to know allergies,
            preferences, cutlery, clean-up crew and much more. Life is already
            hard but organizing potlock does not have to be. What if we tell you
            that there is an app to make your life easier? Well, we present to
            you the Potlockers app. This application is made by the Kamikaze
            Cheese Team and our goal is to make organizing potlucks easy and
            convenient. Coming from the struggles we have on creating potluck
            during our study in InceptionU, it is our mission to deliver food
            goodness to everybody in a quick and easy manner.
          </p>
          <br />
        </div>
        <div className="aboutus-sidebar">
          <img
            src={hstew}
            alt="Stew"
            width={600}
            height={700}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="aboutus-secondbox">
        <div className="aboutus-sidebar2">
          <img
            src={hgroup}
            alt="group"
            width={600}
            height={700}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="aboutus-main2">
          <br />
          <span className="title-main">
            <h1>The art of good Food</h1>
          </span>
          <br />
          <p>
            Our team core value is food and doing good. The Potlockers app will
            allow you to add/remove foods from your potlock list. In addition,
            you can look up recipes for the food you are bringing, organize who
            brings in the cutlery, organize who cleans-up after the event,
            exclude certain types of food because of allergies and other
            additional features. We hope that by using our app, eating food with
            the people you cherish can create great experiences they can never
            forget. Bon appétit!
          </p>
          <br />
          {/* <p>Good Food. Combine. </p> */}
          {/* <br /> */}
          <p>
            <br />
            <Link to="/home/PlanYourOwnEvent" className="btn btn--green">
              Plan Your Own Event
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
