import React, { Component } from "react";

export default class Session extends Component {
  render() {
    return (
      <div>
        <p id="session-label">Session Length</p>
        <button id="session-decrement">Reduce</button>
        <div id="session-length">{this.props.length}</div>
        <button id="session-increment">Increase</button>
      </div>
    );
  }
}

// User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".

// // User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".
