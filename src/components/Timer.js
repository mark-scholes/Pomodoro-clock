import React, { Component } from "react";

export default class Timer extends Component {
  componentDidUpdate() {
    this.props.isBreak === true
      ? document.body.classList.add("break-background")
      : document.body.classList.remove("break-background");
  }
  render() {
    return (
      <div>
        <section>
          <p id="timer-label"></p>
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
        </section>
        <div id="startPause-ResetButtons">
          <button
            id="start_stop"
            onClick={() => this.props.handleStartStop(true)}
          >
            {this.props.isRunning ? "Pause" : "Start"}
          </button>
          <button
            id="reset"
            onClick={() => this.props.reset(true)}
            style={{ display: this.props.isPaused ? "inherit" : "none" }}
          >
            Reset
          </button>
        </div>
        <audio
          id="beep"
          src="https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Bleeps%20Blips%20Blonks%20Blarts%20and%20Zaps/92[kb]checkpoint-hit.aif.mp3"
        ></audio>
      </div>
    );
  }
}
