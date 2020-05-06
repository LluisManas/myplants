import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  state = {
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
      .post("/api/auth/register", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log("LOGIN WORKED", response);
        console.log(this.props.history);
        this.props.setUser(response.data);

        this.props.history.push("/dashboard");
        //Redirect
      })
      .catch((err) => {
        this.setState({
          message: err.response,
        });
      });
  };

  render() {
    return (
      <div>
        <form className="registerFrom" onSubmit={this.handleSubmit}>
          <h2>Login</h2>
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

export default Login;
