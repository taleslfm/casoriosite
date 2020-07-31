import React, { Component } from 'react';
import Countdown from '../countdown/countdown';
import styledApp from './app.module.scss'

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div>
        <h3 className={styledApp.titleApp}>Nos vemos em:</h3>
        <Countdown date={`${year}-10-20T17:30:00`} />
      </div>
    );
  }
}

export default App;