import React, { Component } from 'react';
import Header from '../src/components/Header/header.js'
import Footer from '../src/components/Footer/footer.js'
import Home from './components/home/home.js'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Home/>
      <Footer/>
      </div>
    );
  }
}

export default App;
