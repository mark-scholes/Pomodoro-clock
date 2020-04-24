import React, { Component } from "react";

class Break extends Component {
  render() {
    return (
      <div className="length-div">
        <p id="break-label">Break Length</p>
        <button
          id="break-increment"
          onClick={this.props.handleInceaseDecrease}
          className="breakButtons"
        >
          +
        </button>
        <div id="break-length">{this.props.length}</div>
        <button
          id="break-decrement"
          onClick={this.props.handleInceaseDecrease}
          className="breakButtons"
        >
          -
        </button>
      </div>
    );
  }
}
export default Break;
