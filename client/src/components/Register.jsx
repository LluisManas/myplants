import React, { Component } from "react";
import axios from "axios";

export class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    message: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/user/register", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log("here", response.data);
        console.log("hereeee", response.data.token);
        console.log("a", this.props.history);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          message: err.message,
        });
      });
  };

  render() {
    return (
      <div>
        <form className="registerFrom" onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <label htmlFor="name">Your Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="name">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="name">Password: </label>
          <input
            type="text"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br></br>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default Register;
