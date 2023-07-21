import React from "react";
import "./dashboard.css"
// import { Link } from "react-router-dom";

function Index() {
  return (
    <>
    <br />
    <div className="main-title">
      <h1 className="heading-secondary">create awesome moments</h1>
    </div>
      <br />
      <br />
      <br />

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--7">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  Find a Recipe{" "}
                </span>
              </h4>
              <div className="card__details">
                <p className="card__description">
                Want to find an awesome recipe to try with your buddies, your family, and your loved ones? We got you covered! Ask the recipe that you want to find and we'll find it for you!
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__description">
                    Want more Recipe ideas?
                  </p>
                  <p className="card__price-value">Awesome!</p>
                </div>
                <a href="/home/mealplanningrecipes" className="btn btn--white">
                  Find a Recipe
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--8">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  find existing events
                </span>
              </h4>
              <div className="card__details">
                <p className="card__description">
                Do you want to find a place where all the good foods are? Do you want to have a good time? Let us help you find potluck events in your area!
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__description">Have a Party?</p>
                  <p className="card__price-value">Marvelous!</p>
                </div>
                <a href="/home/existingevents" className="btn btn--white">
                  find events
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--9">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  Create Event
                </span>
              </h4>
              <div className="card__details">
                <p className="card__description">
                Want to be the coolest person in the party? Then let's make the party! Just click a few buttons and you will be the host of an awesome potluck party!
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__description">Have a Party?</p>
                  <p className="card__price-value">Amazing!</p>
                </div>
                <a href="/home/planyourownevent" className="btn btn--white">
                  Create event
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
