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
      breakLength: 5,
      SessionLength: 25,
      isBreak: false,
      isRunning: false,
      isPaused: false,
    };
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleInceaseDecrease = this.handleInceaseDecrease.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
  }

  handleStartStop(Boolean = false) {
    const { isRunning } = this.state;
    this.setState((prevState) => {
      return { isRunning: !prevState.isRunning };
    });
    !isRunning
      ? (this.myInterval = setInterval(() => {
          this.updateTimer();
        }, 1000))
      : clearInterval(this.myInterval);
    if (isRunning && Boolean === true) {
      this.setState((prevState) => {
        return { isPaused: !prevState.isPaused };
      });
    }
  }

  updateTimer() {
    const {
      timerSeconds,
      timerMinutes,
      breakLength,
      SessionLength,
    } = this.state;

    timerSeconds === 0
      ? this.setState((prevState) => {
          return {
            timerMinutes: prevState.timerMinutes - 1,
            timerSeconds: 59,
          };
        })
      : this.setState((prevState) => {
          return {
            timerMinutes: timerMinutes,
            timerSeconds: prevState.timerSeconds - 1,
          };
        });

    if (timerSeconds === 0 && timerMinutes === 0) {
      document.getElementById("beep").play();
      clearInterval(this.myInterval);
      this.handleReset();
      this.setState((prevState) => {
        return {
          isRunning: !prevState.isRunning,
          timerMinutes: this.state.isBreak ? breakLength : SessionLength,
        };
      });
      this.handleStartStop();
    }
  }

  handleReset(Boolean = false) {
    clearInterval(this.myInterval);
    this.setState((prevState) => {
      return {
        timerMinutes: 25,
        timerSeconds: 0,
        breakLength: 5,
        SessionLength: 25,
        // as we need this function to behave differently if it was run due to a button click or due to the updateTimer function a Boolean is passed as a parameter when clicked but not when run from UpdateTimer function
        isBreak: Boolean === true ? false : !prevState.isBreak,
        isPaused: false,
        isRunning: Boolean === true ? false : true,
      };
    });
    if (document.getElementById("beep")) {
      document.getElementById("beep").pause();
      document.getElementById("beep").currentTime = 0;
    }
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
      SessionLength,
      breakLength,
      isBreak,
      isRunning,
      isPaused,
    } = this.state;
    return (
      <div className="App" id={isBreak ? "break" : undefined}>
        <header className="title">
          <p id="timer-label">
            {isRunning && !isBreak
              ? "Session"
              : isBreak
              ? "Break has Begun"
              : "Session"}
          </p>
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
            handleStartStop={this.handleStartStop}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
            reset={this.handleReset}
            isRunning={isRunning}
            isPaused={isPaused}
          />
        </div>
      </div>
    );
  }
}

export default App;

// 7. I can see an element, with corresponding id="timer-label",
//that contains a string indicating a session is initialized (e.g. "Session").

//9. If the timer is running, the element with the id of "time-left"
//should display the remaining time in mm:ss format
//(decrementing by a value of 1 and updating the display every 1000ms).

// 12. When a session countdown reaches zero (NOTE: timer MUST reach 00:00),
// and a new countdown begins,
//the element with the id of "timer-label" should display a string indicating a break has begun

//13. When a session countdown reaches zero (NOTE: timer MUST reach 00:00),
//a new break countdown should begin,
// counting down from the value currently displayed in the id="break-length" element.

//14. When a break countdown reaches zero (NOTE: timer MUST reach 00:00),
// and a new countdown begins,
//the element with the id of "timer-label" should display a string indicating a session has begun.

//15. When a break countdown reaches zero (NOTE: timer MUST reach 00:00),
//a new session countdown should begin,
//counting down from the value currently displayed in the id="session-length" element.

//Audio 3. The audio element with id of "beep" must stop playing
//and be rewound to the beginning when the element with the id of "reset" is clicked.
