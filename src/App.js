import React, { Component } from "react";
import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import Timer from "./components/Timer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timerMinutes: 25,
      timerSeconds: 0,
      time: 0,
      display: 0,
      breakLength: 5,
      SessionLength: 25,
      isBreak: true,
      isRunning: false,
    };
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleInceaseDecrease = this.handleInceaseDecrease.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
  }

  handleStartStop() {
    this.setState((prevState) => {
      return { isRunning: !prevState.isRunning };
    });
    !this.state.isRunning
      ? (this.myInterval = setInterval(() => {
          this.updateTimer();
        }, 1000))
      : clearInterval(this.myInterval);
  }

  updateTimer() {
    const {
      timerSeconds,
      timerMinutes,
      breakLength,
      SessionLength,
    } = this.state;

    if (timerSeconds === 0) {
      this.setState((prevState) => {
        return {
          timerMinutes: prevState.timerMinutes - 1,
          timerSeconds: 59,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          timerSeconds: prevState.timerSeconds - 1,
        };
      });
    }
    if (timerSeconds === 0 && timerMinutes === 0) {
      clearInterval(this.myInterval);
      this.handleReset();
      this.setState((prevState) => {
        return {
          isBreak: !prevState.isBreak,
          isRunning: !prevState.isRunning,
          timerMinutes: this.state.isBreak ? breakLength : SessionLength,
        };
      });
    }
  }

  handleReset() {
    this.setState({
      timerMinutes: 25,
      timerSeconds: 0,
      breakLength: 5,
      SessionLength: 25,
      isBreak: false,
    });
  }

  handleInceaseDecrease(e) {
    const { SessionLength, breakLength, timerMinutes } = this.state;
    // break length changes
    if (e.target.className === "breakButtons") {
      if (e.target.id === "break-decrement" && breakLength > 1) {
        this.setState({
          breakLength: breakLength - 1,
        });
      }

      if (e.target.id === "break-increment" && breakLength < 60) {
        this.setState({
          breakLength: breakLength + 1,
        });
      }
    }

    // session length changes
    else {
      if (e.target.id === "session-decrement" && SessionLength > 1) {
        this.setState({
          SessionLength: SessionLength - 1,
          timerMinutes: timerMinutes - 1,
        });
      }

      if (e.target.id === "session-increment" && SessionLength < 60) {
        this.setState({
          SessionLength: SessionLength + 1,
          timerMinutes: timerMinutes + 1,
        });
      }
    }
  }
  render() {
    const {
      timerMinutes,
      timerSeconds,
      display,
      SessionLength,
      breakLength,
      isBreak,
      isRunning,
    } = this.state;
    return (
      <div className="App" id={isBreak ? "break" : undefined}>
        <header className="title">
          <p>POMODORO CLOCK</p>
        </header>

        <div className="clock">
          <div className="intervals">
            <Break
              length={breakLength}
              handleInceaseDecrease={this.handleInceaseDecrease}
            />
            <Session
              length={SessionLength}
              handleInceaseDecrease={this.handleInceaseDecrease}
            />
          </div>
          <Timer
            timer={display}
            handleStartStop={this.handleStartStop}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
            reset={this.handleReset}
            isRunning={isRunning}
          />
        </div>
      </div>
    );
  }
}

export default App;

// User Story #11: When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to it's default state.

// User Story #18: When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.

// User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).

// User Story #20: If the timer is running and I click the element with id="start_stop", the countdown should pause.

// User Story #21: If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.

// User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.

// User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.

// User Story #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.

// User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.

// User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".

// User Story #27: The audio element with id="beep" must be 1 second or longer.

// User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.
