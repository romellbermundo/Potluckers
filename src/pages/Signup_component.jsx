import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

import kcheese from "../img/kcheese.png";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    try {
      e.preventDefault();
      const { fname, lname, email, password } = this.state;
      // console.log(fname, lname, email, password);
      fetch("/auth/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Signup successful");
            toast.success("Signed up successfully, please Login!");
            window.location.href = "./sign-in";
          }
        });
    } catch (err) {
      console.log("Error");
      toast.error("Error");
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <body className="root" />
        </Helmet>
        <div className="signup-container">
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <img src={kcheese} className="team-logo" alt="kcheese logo" />
            <h2 className="signup-label">Sign Up</h2>

            <div className="form-outline">
              {/* <label>First name</label> */}
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e) => this.setState({ fname: e.target.value })}
              />
            </div>

            <div className="form-outline mb-4">
              {/* <label>Last name</label> */}
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => this.setState({ lname: e.target.value })}
              />
            </div>

            <div className="form-outline mb-4">
              {/* <label className="form-label" htmlFor="form4Example2">Email address</label> */}
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <div className="form-outline mb-4">
              {/* <label>Password</label> */}
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>

            <br />
            <div className="d-grid">
              <button type="submit" className="btn btn--green">
                Sign Up
              </button>
            </div>

            <br />
            <p className="forgot-password text-right">
              Already have an account? <a href="/sign-in">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
