import React, { Component } from "react";
import { Helmet } from "react-helmet";

import kcheese from "../img/kcheese.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    // console.log(email, password);
    fetch("/auth/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./home";
        }
      });
  }

  render() {
    return (
      <>
        <Helmet>
          <body className="root" />
        </Helmet>
        <div className="signup-container">
          <form className="signup_form" onSubmit={this.handleSubmit}>
            <img src={kcheese} className="team-logo" />
            <h2 className="signup-label">Sign In</h2>

            <div className="form-outline">
              {/* <label>Email address</label> */}
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <div className="form-outline">
              {/* <label>Password</label> */}
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <br />
            <div className="form-outline">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn--green">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              <br />
              Not a member? <a href="/sign-up">Sign Up</a>
            </p>
          </form>
        </div>
      </>
    );
  }
}
