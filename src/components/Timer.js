import React, { Component } from "react";

export default class Timer extends Component {
  componentDidUpdate() {
    this.props.isBreak === true
      ? document.body.classList.add("break-background")
      : document.body.classList.remove("break-background");
  }
  render() {
    const { timerMinutes, timerSeconds } = this.props;
    let output = "";
    let minutes = timerMinutes < 10 ? "0" + timerMinutes : timerMinutes;
    let seconds = timerSeconds < 10 ? "0" + timerSeconds : timerSeconds;
    output = minutes + ":" + seconds;

    return (
      <div>
        <section>
          <div id="clock">
            <p id="time-left">{output}</p>
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
