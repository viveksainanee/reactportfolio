import React, { Component } from 'react';
import './Stopwatch.css';

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      currTime: 0
    };
  }

  componentDidMount() {
    this.stopwatch = setInterval(
      () =>
        this.setState(prevState => ({ currTime: (prevState.currTime += 1) })),
      1000
    );
  }

  render() {
    const currTime = this.state.currTime;
    const min = Math.floor(currTime / 60);
    let sec = (this.state.currTime % 60).toString();
    if (sec.length === 1) sec = '0' + sec;
    const displayTime = min === 0 ? `${sec}` : `${min}:${sec}`;

    if (parseInt(sec) < 30) {
      return <div class="stopwatch light">{displayTime}</div>;
    }
    return <div class="stopwatch dark">{displayTime}</div>;
  }
}

export default Stopwatch;
