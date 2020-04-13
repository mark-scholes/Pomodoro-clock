import React, { Component } from "react";

export default class Timer extends Component {
  render() {
    return (
      <div>
        <p id="timer-label">timer</p>
        <div id="time-left">00:00</div>
        <button id="start_stop">Start/stop</button>
        <button id="reset">Reset</button>
      </div>
    );
  }
}
