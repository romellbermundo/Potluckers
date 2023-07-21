import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer-row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Kamikaze Cheese | All rights
            reserved |{" "}
            <Link to="/home" className="footer__link">
              Home
            </Link>{" "}
            |{" "}
            <Link to="/home/PrivacyPolicy" className="footer__link">
              Privacy
            </Link>{" "}
            |{" "}
            <Link to="/home/TermsOfUse" className="footer__link">
              Terms of Use
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
