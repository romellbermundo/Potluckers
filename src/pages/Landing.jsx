import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../sass/main.scss";
import "../css/style.css";
// import "../css/icon-font.css";

import codeVideo from "../img/code.mp4";
import kWings from "../img/potlucker-kamikaze-wings.jpg";
import kbulgogi from "../img/potlucker-korean-beef-bulgogi.jpg";
import mPizza from "../img/potlucker-margherita-pizza.jpg";
import cCake from "../img/potlucker-chocolate-cake.jpg";
import cCookie from "../img/potlucker-chocolate-chip-cookies.jpg";
import rCheseCake from "../img/potlucker-raspberry-cheese-cake.jpg";
import tProgress from "../img/potlucker-track-progress.jpg";
import kInformed from "../img/potlucker-keeps-informed.jpg";
import pMenu from "../img/potlucker-perfect-menus.jpg";
import tProfile from "../img/tyler-sartison.jpg";
import timProfile from "../img/tim.jpg";
import tijaProfile from "../img/tija.jpg";
import romellProfile from "../img/romell.jpg";
import logoWhite from "../img/logowhite.png";
import logo2White from "../img/logo2white.png";

function Landing() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(false);
  };
  return (
    <>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <HashLink
                to="#popular-mains"
                className="navigation__link"
                onClick={handleChange}
              >
                <span>01</span>Popular Recipes: Mains
              </HashLink>
            </li>
            <li className="navigation__item">
              <HashLink
                to="#popular-deserts"
                className="navigation__link"
                onClick={handleChange}
              >
                <span>02</span>Popular Recipes: Deserts
              </HashLink>
            </li>
            <li className="navigation__item">
              <HashLink
                to="#learn-about-potlucker"
                className="navigation__link"
                onClick={handleChange}
              >
                <span>03</span>Learn About Potluckers
              </HashLink>
            </li>
            <li className="navigation__item">
              <HashLink
                to="#meet-the-team"
                className="navigation__link"
                onClick={handleChange}
              >
                <span>04</span>Meet The Team
              </HashLink>
            </li>
            <li className="navigation__item">
              <HashLink
                to="#refer-someone"
                className="navigation__link"
                onClick={handleChange}
              >
                <span>05</span>Refer Someone
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!--Start Header Section--> */}
      <header className="header">
        <div className="header__logo-box">
          <img src={logoWhite} alt="Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Potlucker</span>
            <span className="heading-primary--sub">Where Awesome Happens</span>
          </h1>

          <Link to="/sign-up" className="btn btn--white btn--white:hover">
            Sign in / Sign Up
          </Link>
        </div>
      </header>
      {/* <!--End Header Section-->
<!--Start Popular Main Course Recipes Section--> */}
      <section className="section-tours">
        <div className="u-center-text u-margin-bottom-big" id="popular-mains">
          <h2 className="heading-secondary">Popular Main Course Recipes</h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    Kamikaze Cheese Wings
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Serves: 4 - 6</li>
                    <li>Skill: Intermediate</li>
                    <li>Prep: Intensive</li>
                    <li>Serve: Hot</li>
                    <li>Napkins Needed</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Survey Says!</p>
                    <p className="card__price-value">10 OUT OF 10</p>
                  </div>
                  <a href="#popup" className="btn btn--white">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    Korean Beef Bulgogi
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Serves: 6 - 8</li>
                    <li>Skill: Intermediate</li>
                    <li>Prep: Intensive</li>
                    <li>Serve: Hot</li>
                    <li>Chopsticks Needed</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Survey Says!</p>
                    <p className="card__price-value">7 OUT OF 10</p>
                  </div>
                  <a href="#popup2" className="btn btn--white">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    Margherita Pizza
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Serves: Up to 4</li>
                    <li>Skill: Intermediate</li>
                    <li>Prep: Intensive</li>
                    <li>Serve: Hot</li>
                    <li> Finger Food</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Survey Says!</p>
                    <p className="card__price-value">8 OUT OF 10</p>
                  </div>
                  <a href="#popup3" className="btn btn--white">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Popular Main Course Recipes Section-->
<!--Start Popular Desert Recipes Section--> */}
      <section className="section-tours">
        <div className="u-center-text u-margin-bottom-big" id="popular-deserts">
          <h2 className="heading-secondary">Popular Desert Recipes</h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--4">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    Chocolate Cake
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Serves: 4 - 6</li>
                    <li>Skill: Intermediate</li>
                    <li>Prep: Intensive</li>
                    <li>Serve: Cold</li>
                    <li>Fingers/Forks</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Survey Says!</p>
                    <p className="card__price-value">10 OUT OF 10</p>
                  </div>
                  <a href="#popup4" className="btn btn--white">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--5">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    Chocolate Chip Cookies
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Serves: 6 - 8</li>
                    <li>Skill: Beginner</li>
                    <li>Prep: Easy</li>
                    <li>Serve: Cold</li>
                    <li>Finger Food</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Survey Says!</p>
                    <p className="card__price-value">9 OUT OF 10</p>
                  </div>
                  <a href="#popup5" className="btn btn--white">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--6">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    Raspberry Cheese Cake
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Serves: 6 - 8</li>
                    <li>Skill: Intermediate</li>
                    <li>Prep: Intensive</li>
                    <li>Serve: Cold</li>
                    <li>Forks/Plates</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Survey Says!</p>
                    <p className="card__price-value">8 OUT OF 10</p>
                  </div>
                  <a href="#popup6" className="btn btn--white">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--<div className="u-center-text u-margin-top-huge">
        <Link to="/home" className="btn btn--green">Sign In / Sign Up</a>
    </div>-->
<!--Start Popular Desert Recipes Section-->
<!--Start How It Works Section--> */}
      <section className="section-tours">
        <div
          className="u-center-text u-margin-bottom-big"
          id="learn-about-potlucker"
        >
          <h2 className="heading-secondary">Learn More About Potlucker</h2>
        </div>

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
                    <p className="card__price-only">
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
                    <p className="card__price-only">Have a Party?</p>
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
                    <p className="card__price-only">Have a Party?</p>
                    <p className="card__price-value">Amazing!</p>
                  </div>
                  <a href="/sign-up" className="btn btn--white">
                  Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <Link to="/sign-up" className="btn btn--green">
            Sign In / Sign Up
          </Link>
        </div>
      </section>
      {/* <!--End How It Works Section-->
<!--Start Stories Section-->
            <!--<section className="section-stories" id="potlucker-stories">
                <div className="bg-video">
                    <video className="bg-video__content" autoplay muted loop>
                        <source src="../img/potlucker-stories-section.mp4" type="video/mp4">
                        Your browser is not supported!
                    </video>
                </div>

                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Potlucks make people genuinely happy
                    </h2>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="../img/nat-8.jpg" alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">Mary Smith</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">I had the best potluck ever with family and friends</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="../img/nat-9.jpg" alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">WOW! It was so easy to host a perfect potluck!</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn-text">Read all stories &rarr;</a>
                </div>
            </section>-->
<!--End Stories Section-->
<!--Start Meet The Team Section--> */}
      <section className="section-stories" id="meet-the-team">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={codeVideo} type="video/mp4" />
            Your browser is not supported!
          </video>
        </div>

        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Meet Team Kamikaze Cheese Wings!
          </h2>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                src={tijaProfile}
                alt="Person on a tour"
                className="story__img"
              />
              <figcaption className="story__caption">
                Kshitija Shirsathe
              </figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                I love my server!
              </h3>
              <h1>Kshitija Shirsathe</h1>
              <p>
              I am Kshitija and I was part of the backend and was doing the sign up and log in pages. I was able to create authorization with the users. I am also passionate about contributing to this ever growing and constantly updating technology world. Working with people and building team harmony is my strength.  Butter chicken makes me happy.
              </p>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a
                href="https://www.linkedin.com/in/kshitija-shirsathe-095a2197/"
                className="btn btn--green"
              >
                Full Bio
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                src={romellProfile}
                alt="Person on a tour"
                className="story__img"
              />
              <figcaption className="story__caption">Scrum Master</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Have fun and have friends!
              </h3>
              <h1>Romell Bermundo</h1>
              <p>
                I love steak and cheese. So, when I learned that my team is
                going to choose cheese as part of our team name, I was all in.
                My name is Romell and I am a designer by heart. I love designing
                artistically but also, I love designing systems to make sure
                that everything is efficient and user-friendly. My core values
                are design, coding, food, and having fun. Enjoy visiting our
                site.
              </p>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a
                href="https://www.linkedin.com/in/romellbermundo/"
                className="btn btn--green"
              >
                Full Bio
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                src={timProfile}
                alt="Person on a tour"
                className="story__img"
              />
              <figcaption className="story__caption">Full Stack</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                BEST TIM ever!
              </h3>
              <h1>Timothy Huynh</h1>
              <p>
              Tim is our back-end guy and he is also responsible for the integration of our data between the frontend and the back end. Tim basically nailed it with the API data for recipes. He is very adaptable and someone that can work on the project and help his classmates along the way. Usually calm and collected, he is the epitome of being a programmer. Loves spaghetti.
              </p>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a
                href="https://www.linkedin.com/in/timothy-huynh-yyc/"
                className="btn btn--green"
              >
                Full Bio
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                src={tProfile}
                alt="Person on a tour"
                className="story__img"
              />
              <figcaption className="story__caption">Front End</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                The Best Group I've ever worked with.
              </h3>
              <h1>Tyler Sartison</h1>
              <p>
                This was a fun project to work on because of the great people. I
                learned a lot during the process and had fun along the way. What
                more could I have asked for? Throughout the duration my focus
                was on the front end of the Potlucker website. I used HTML 5,
                CSS, SCSS, JavaScrit, Node, Terminal, GitHub, Iconfont and
                VsCode. Please view my full bio at LinkedIn.
              </p>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a
                href="https://www.linkedin.com/in/tyler-sartison-3030172a/ "
                target="_blank"
                className="btn btn--green"
              >
                Full Bio
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Stories Section-->
<!--Start Refer Someone Section--> */}
      <section className="section-book" id="refer-someone">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">Refer Someone Today</h2>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full name"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full name
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email address"
                    id="email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>

                <div className="form__group u-margin-bottom-medium">
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="small"
                      name="size"
                    />
                    <label htmlFor="small" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Current Member
                    </label>
                  </div>

                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="large"
                      name="size"
                    />
                    <label htmlFor="large" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Need To Sign-up
                    </label>
                  </div>
                </div>

                <div className="form__group">
                  <button className="btn btn--green">Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!--End Refer Someone Section-->
<!--startFooter Section--> */}
      <footer className="footer">
        <div className="footer__logo-box">
          <img src={logo2White} alt="Full logo" className="footer__logo" />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#top" className="footer__link">
                    Back to Top
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/home/PrivacyPolicy" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/home/TermsOfUse" className="footer__link">
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Front-page designed by{" "}
              <a href="#" className="footer__link">
                Jonas Schmedtmann
              </a>{" "}
              hand coded by Tyler Sartison for his online course{" "}
              <a href="#" className="footer__link">
                Advanced CSS and Sass
              </a>
              . Copyright &copy; by Jonas Schmedtmann.
              {/* You are 100% allowed to
              use this webpage for both personal and commercial use, but NOT to
              claim it as your own design. A credit to the original author,
              Jonas Schmedtmann, is of course highly appreciated! */}
            </p>
          </div>
        </div>
      </footer>
      {/* <!--End Footer Section-->
<!--Start Content for popups--> */}
      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src={kWings} alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Kamikaze Cheese Wings!
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Always A Hit &ndash; Add this item to your next potluck menu!
            </h3>
            <p className="popup__text">
            Chicken wings for this simple and quick recipe are especially delicious and fragrant. Grated cheese forms a crispy ruddy crust on the meat and gives the chicken a special piquant note. For a recipe, any type of cheese that melts well while heating, for example parmesan or cheddar, is suitable. For marinating chicken wings, you can use a ready-made mixture of seasonings for chicken or your favorite spices.
            Chicken wings can be supplemented with mustard, garlic or tomato sauce. Meat, baked according to this recipe, is well combined with puree, crumbly rice or salad from fresh vegetables.
            </p>
            <Link to="/sign-up" className="btn btn--green">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="popup" id="popup2">
        <div className="popup__content">
          <div className="popup__left">
            <img src={kbulgogi} alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Korean Beef Bulgogi!
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              So Awesome &ndash; Add this item to your next potluck menu!
            </h3>
            <p className="popup__text">
            Bulgogi, a classic Korean dish of thinly sliced, marinated beef, is a staple of Korean households. As meatballs and spaghetti are to Italian Americans or matzo ball soup to Ashkenazi Jews, bulgogi—eaten over rice or wrapped in lettuce—is a ubiquitous meal in seemingly every Korean cook’s repertoire and deeply ingrained in Korean culture. According to the peer-reviewed Korea Journal, the dish’s origins stretch back to the Goguryeo era (37 B.C. to 668 A.D.), the evolution of a kabob-like skewered meat preparation called maekjeok. Over time, maekjeok became seoryamyeok, a brothy dish of marinated beef soaked in cold water, which by the early 20th century gave way to neobiani, a luxurious dish of thinly-sliced, marinated and charbroiled beef favored by Korean royalty.
            </p>
            <Link to="/sign-up" className="btn btn--green">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="popup" id="popup3">
        <div className="popup__content">
          <div className="popup__left">
            <img src={mPizza} alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Margherita Pizza!
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              So Tasty &ndash; Add this item to your next potluck menu!
            </h3>
            <p className="popup__text">
            Pizza is surely one of the most beloved, best known, and most wide-spread Italian culinary creations. Its most basic variety, Pizza Margherita, created in Naples, is made with just a few quality ingredients: naturally leavened dough, stretched and spun into a circle, topped with San Marzano tomatoes, buffalo mozzarella, a drizzle of extra virgin olive oil, and baked in a wood-burning dome-shaped oven. In the culinary world, it is so important that in 2010 Neapolitan pizza got the designation of STG, Specialità Tradizionale Garantita. In 2017 the art of Neapolitan pizza-making was honored with UNESCO’s “intangible cultural heritage” status. To teach, promote, and preserve this culinary cultural treasure, in 1984 the VPN, Verace Pizza Napoletana, True Neapolitan Pizza Association was founded.
            </p>
            <Link to="/sign-up" className="btn btn--green">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="popup" id="popup4">
        <div className="popup__content">
          <div className="popup__left">
            <img src={cCake} alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Chocolate Cake!
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Always Tempting &ndash; Add this item to your next potluck menu!
            </h3>
            <p className="popup__text">
            The history of chocolate cake is a bit of a mystery, but it is believed that the first chocolate cake was created in the early 1800s. There are several different stories about how the chocolate cake was invented, but all of the stories agree that the chocolate cake is a relatively recent invention.
The first printed recipe for chocolate cake appeared in the American publication Boston Cooking School Cook Book.
In the early 1900s, confectioners discovered how to make chocolate bars. By combining melted chocolate with powdered cocoa, they could mass-produce delicious treats. Soon, companies began selling packaged mixes containing both cocoa and sugar. These became known as chocolate cake mix. 

            </p>
            <Link to="/sign-up" className="btn btn--green">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="popup" id="popup5">
        <div className="popup__content">
          <div className="popup__left">
            <img src={cCookie} alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Chocolate Chip Cookes!
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Comfort Desert Food &ndash; Add this item to your next potluck
              menu!
            </h3>
            <p className="popup__text">
            Believe it or not, everyone’s favorite chocolate chip cookie is now over 80 years old!

The original recipe was created in the late 1930s by Ruth Wakefield who famously ran the Toll House restaurant in Whitman, Massachusetts. The delicious mix of crispy cookie and melted chocolate chunks first appeared in her 1938 cookbook “Tried and True,” and was intended to accompany ice cream.

The recipe became so popular that it showed up on Betty Crocker’s influential radio program, further cementing its reputation as America’s go-to cookie. In 1939, Wakefield sold the rights to use her recipe and the Toll House name to Nestle.
<br/>
While there are numerous apocryphal stories about the cookie recipe’s origins, from chocolate accidentally falling into cookie batter to a rushed last-minute replacement ingredient miracle, the truth is a bit more practical.

            </p>
            <Link to="/sign-up" className="btn btn--green">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="popup" id="popup6">
        <div className="popup__content">
          <div className="popup__left">
            <img src={rCheseCake} alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Raspberry Cheese Cake!
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Always Goes Fast &ndash; Add this item to your next potluck menu!
            </h3>
            <p className="popup__text">
            Prepare your baking sheet with parchment paper and preheat your oven as needed.
In a bowl, you will combine your cream cheese danish filling mixture and mix with a handheld mixer until well blended, leaving raspberry jam out until later.
You will cut the puff pastry as shown, and layer your raspberry jam and cream cheese danish filling as appropriate before braiding and topping with an egg wash to bake.
Top with a drizzle of glaze if desired.

            </p>
            <Link to="/sign-up" className="btn btn--green">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="popup" id="popup7">
        <div className="popup__content">
          <div className="popup__left">
            <img src={tProgress} alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Keeps track of progress!
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Never Guess or worry&ndash; potlucker keeps everyone in the loop!
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              sed risus pretium quam. Aliquam sem et tortor consequat id.
              Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
              neque egestas congue. Placerat orci nulla pellentesque dignissim
              enim sit. Vitae semper quis lectus nulla at volutpat diam ut
              venenatis. Malesuada pellentesque elit eget gravida cum sociis
              natoque penatibus et. Proin fermentum leo vel orci porta non
              pulvinar neque laoreet. Gravida neque convallis a cras semper.
              Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
              vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam
              libero justo laoreet sit. Amet massa vitae tortor condimentum
              lacinia quis vel eros donec. Sit amet facilisis magna etiam.
              Imperdiet sed euismod nisi porta.
            </p>
            <Link to="/sign-up" className="btn btn--green">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="popup" id="popup8">
        <div className="popup__content">
          <div className="popup__left">
            <img src={kInformed} alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Keeps everyone informed!
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Date, Time, Formal, informal&ndash; potlucker even tracks who is
              bringing what.
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              sed risus pretium quam. Aliquam sem et tortor consequat id.
              Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
              neque egestas congue. Placerat orci nulla pellentesque dignissim
              enim sit. Vitae semper quis lectus nulla at volutpat diam ut
              venenatis. Malesuada pellentesque elit eget gravida cum sociis
              natoque penatibus et. Proin fermentum leo vel orci porta non
              pulvinar neque laoreet. Gravida neque convallis a cras semper.
              Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
              vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam
              libero justo laoreet sit. Amet massa vitae tortor condimentum
              lacinia quis vel eros donec. Sit amet facilisis magna etiam.
              Imperdiet sed euismod nisi porta.
            </p>
            <Link to="/sign-up" className="btn btn--green">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="popup" id="popup9">
        <div className="popup__content">
          <div className="popup__left">
            <img src={pMenu} alt="Tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              creates your perfect menus!
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Main Course, Sides, Appitizers and Deserts&ndash; potlucker
              builds, tracks and maintains all your menus!
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              sed risus pretium quam. Aliquam sem et tortor consequat id.
              Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
              neque egestas congue. Placerat orci nulla pellentesque dignissim
              enim sit. Vitae semper quis lectus nulla at volutpat diam ut
              venenatis. Malesuada pellentesque elit eget gravida cum sociis
              natoque penatibus et. Proin fermentum leo vel orci porta non
              pulvinar neque laoreet. Gravida neque convallis a cras semper.
              Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
              vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam
              libero justo laoreet sit. Amet massa vitae tortor condimentum
              lacinia quis vel eros donec. Sit amet facilisis magna etiam.
              Imperdiet sed euismod nisi porta.
            </p>
            <Link to="/sign-up" className="btn btn--green">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>
      {/* <!--End Content for popups-->
        <!--
        <section className="grid-test">
            <div className="row">
                <div className="col-1-of-2">
                    Col 1 of 2
                </div>
                <div className="col-1-of-2">
                    Col 1 of 2
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    Col 1 of 3
                </div>
                <div className="col-2-of-3">
                    Col 2 of 3
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-2-of-4">
                    Col 2 of 4
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-4">
                    Col 1 of 4
                </div>
                <div className="col-3-of-4">
                    Col 3 of 4
                </div>
            </div>
        </section>
        --> */}
    </>
  );
}

export default Landing;
