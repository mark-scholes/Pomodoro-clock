import React, { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      isBreak: true,
      timerSeconds: 0,
    };
  }
  componentDidUpdate() {
    this.props.isBreak === true
      ? document.body.classList.add("break-background")
      : document.body.classList.remove("break-background");
  }
  render() {
    return (
      <section>
        <p id="timer-label">
          {this.state.isBreak === true &&
            document.body.classList.add("break-background")}
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
              {this.state.timerSeconds <= 9
                ? "0" + this.state.timerSeconds
                : this.state.timerSeconds}
            </span>
          </p>
        </div>
        <button id="start_stop" onClick={this.props.handleStartStop}>
          Pause
        </button>
        <button id="reset">Reset</button>
      </section>
    );
  }
}
