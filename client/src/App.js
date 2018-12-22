import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import Footer from './components/layout/Footer/footer.js';
import Header from './components/layout/Header/header.js';
import Home from './components/home/home.js'
import Login from './components/Login/login/login'
import Signup from './components/Login/signup/signup'
import UserAdmin from './components/UserAdminProfile/UserAdmin'
import './App.css'




// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login';
  }
}



class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <BrowserRouter>

      <div className="App">
       <Header/>
       
       <div>
       <Route exact path="/" render={ ()=><Home/>}/>
       <Route exact path="/login" render={ ()=><Login/>}/>
       <Route exact path="/signup" render={ ()=><Signup/>}/>
       <Route exact path="/admin-profil" render={UserAdmin}/>
       </div>
       <Footer/>
       </div>   
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;