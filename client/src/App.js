import React, { Component } from 'react';
import Header from './components/home/header.js'
import Search from './components/home/search.js'
import SelectBox from './components/home/selectBox.js'
import RecentBooks from './components/home/recentBooks.js'
import TopBooks from './components/home/topBooks.js'
import TopUsers from './components/home/topUsers.js'
import Footer from './components/home/footer.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
    <div className="Books">
      <div className="Search-Container">
      <Search/>
      <SelectBox value={"select your country"}/>
      <SelectBox value={"select your category"}/>
      <SelectBox value={"select your option"}/>
      </div>
      <div className="books-container">
      <div className="RecentBooks-Container">
      <RecentBooks/>
    </div>
      <div className="RecentBooks-Container">
      <TopBooks/>
      </div>
      </div>
      </div>
      <div className="topUser-container">
      <TopUsers/>
      </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
