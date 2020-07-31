import React, { Component } from 'react';
import Countdown from '../components/countdown/countdown';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <h3 className="title">Farta X</h3>
        <Countdown date={`${year}-10-20T17:30:00`} />
      </div>
    );
  }
}

export default App;