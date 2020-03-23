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
    const min = Math.floor(this.state.currTime / 60);
    let sec = (this.state.currTime % 60).toString();
    if (sec.length === 1) sec = '0' + sec;
    const displayTime = min === 0 ? `${sec}` : `${min}:${sec}`;
    return <div class="stopwatch">{displayTime}</div>;
  }
}

export default Stopwatch;
