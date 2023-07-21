import React, { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick(event) {
    // event.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "/home";
  }

  componentDidMount() {
    fetch("/auth/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div className="title-main">
          <h1>Your Details</h1>
        </div>
        <h1>Name: {this.state.userData.fname}</h1>
        <h1>Email: {this.state.userData.email}</h1>
        <h1>
          Role: {this.state.userData.role === 1 ? "Admin" : "Registered User"}
        </h1>
        <h1>Date: {Date(Date.now)}</h1>

        <br />
        <button className="btn btn--green" onClick={this.handleclick}>
          Signout
        </button>
      </div>
    );
  }
}
