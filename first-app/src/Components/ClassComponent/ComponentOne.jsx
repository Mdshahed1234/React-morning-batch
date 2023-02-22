import React, { Component } from 'react'

export  class ComponentOne extends Component {
  render() {
    return (
      <>
        <div>ComponentOne</div>
        <h1>{this.props.hello.fullAdd}</h1>
      </>
    );
  }
}
