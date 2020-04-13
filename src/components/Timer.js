import React, { Component } from "react";

export default class Timer extends Component {
  render() {
    return (
      <div>
        <p id="timer-label">timer</p>
        <div id="time-left">{this.props.timer}</div>
        <button id="start_stop">Pause</button>
        <button id="reset">Reset</button>
      </div>
    );
  }
}
