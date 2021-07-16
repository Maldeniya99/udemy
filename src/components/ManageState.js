import React, { Component } from "react";

class ManageState extends Component {
  constructor() {
    super();
    this.state = {
      name: "ironman",
      age: "40",
      power: "5000",
    };
  }
  chanagedata = () => {
    this.setState({
      name: "hulk",
      age: "50",
      power: "1000",
    });
  };
  render() {
    return (
      <div>
        <h1>Managinging state in class componenets</h1>
        <h2>Name:{this.state.name}</h2>
        <h2>Age:{this.state.age}</h2>
        <h2>Power:{this.state.power}</h2>

        <button onClick={this.chanagedata}> change data</button>
      </div>
    );
  }
}

export default ManageState;
