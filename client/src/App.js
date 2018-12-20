import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// import store from "./store";
// import { Provider } from "react-redux";
//import Footer from './components/layout/Footer/footer';
import Header from './components/layout/Header/header.js';
import Home from './components/home/home.js'
import Login from './components/Login/login/login'
<<<<<<< HEAD

=======
import Signup from './components/Login/signup/signup'
import UserProfile from './components/User/User'
>>>>>>> eb64daeb731d2ae9fe97890e6eacf33bc4165dc6
import './App.css'

class App extends Component {
  render() {
    return (
    // <Provider store={store}>
    <BrowserRouter>

      <div className="App">
       <Header/>
        {  /* <Footer/> */}
       <div>
       <Route exact path="/" render={ ()=><Home/>}/>
       <Route exact path="/login" render={ ()=><Login/>}/>
<<<<<<< HEAD
=======
       <Route exact path="/signup" render={Signup}/>
       <Route exact path="/Userprofile" render={UserProfile}/>
>>>>>>> eb64daeb731d2ae9fe97890e6eacf33bc4165dc6
       </div>

       </div>   
      </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;