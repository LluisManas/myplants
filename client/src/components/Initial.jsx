import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";

export class Initial extends Component {
  state = {
    user: this.props.user,
  };
  setUser = (userObj) => {
    this.setState({
      user: userObj,
    });
  };
  render() {
    return (
      <div>
        <Register setUser={this.props.setUser} history={this.props.history} />
        <Login history={this.props.history} setUser={this.props.setUser} />
      </div>
    );
  }
}

export default Initial;
