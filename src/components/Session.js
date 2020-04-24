import React, { Component } from "react";

export default class Session extends Component {
  render() {
    return (
      <div className="length-div">
        <p id="session-label">Session Length</p>
        <button
          id="session-increment"
          onClick={this.props.handleInceaseDecrease}
          className="sessionButtons"
        >
          +
        </button>
        <div id="session-length">{this.props.length}</div>
        <button
          id="session-decrement"
          onClick={this.props.handleInceaseDecrease}
          className="sessionButtons"
        >
          -
        </button>
      </div>
    );
  }
}

// User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".

// // User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".
