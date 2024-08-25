
import './App.css';
import Nav from './component/Nav'
import React, { Component } from 'react'
import News from './component/News';

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <News />
      </div>
    )
  }
}

export default App
