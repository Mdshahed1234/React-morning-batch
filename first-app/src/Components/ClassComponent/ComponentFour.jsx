import React, { Component } from 'react'

export default class ComponentFour extends Component {
  constructor() {
    super()
    this.state = {
      Name: "i am shahed",
    };
  }
  render() {
    return (
      <>
        <div>ComponentFour</div>
        
        <h1>{this.state.Name}</h1>
      </>
    );
  }
}
