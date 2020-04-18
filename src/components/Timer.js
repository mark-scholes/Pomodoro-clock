import React, { Component } from "react";

export default class Timer extends Component {
  componentDidUpdate() {
    this.props.isBreak === true
      ? document.body.classList.add("break-background")
      : document.body.classList.remove("break-background");
  }
  render() {
    return (
      <section>
        <p id="timer-label">
          {/* {this.props.isBreak === true
            ? document.body.classList.add("break-background")
            : document.body.classList.remove("break-background")} */}
        </p>
        <div id="time-left">
          <p id="timer-clock">
            <span>
              {this.props.timerMinutes <= 9
                ? "0" + this.props.timerMinutes
                : this.props.timerMinutes}
            </span>
            <span>:</span>
            <span>
              {this.props.timerSeconds <= 9
                ? "0" + this.props.timerSeconds
                : this.props.timerSeconds}
            </span>
          </p>
        </div>
        <button id="start_stop" onClick={this.props.handleStartStop}>
          {this.props.isRunning ? "Pause" : "Start"}
        </button>
        <button id="reset" onClick={this.props.reset}>
          Reset
        </button>
      </section>
    );
  }
}
