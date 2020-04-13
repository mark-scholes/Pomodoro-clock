import React, { Component } from "react";

class Break extends Component {
  render() {
    return (
      <div>
        <p id="break-label">Break Length</p>
        <button id="break-decrement">Reduce</button>
        <div id="break-length">5</div>
        <button id="break-increment">Increase</button>
      </div>
    );
  }
}
export default Break;
