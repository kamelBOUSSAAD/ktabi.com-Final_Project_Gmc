import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import CreateProfile from './components/CreateProfile';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import Landing from './components/layout/Landing';
import PrivateRoute from './components/common/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';

import Footer from './components/layout/Footer/footer.js';
import Header from './components/layout/Header/header.js';
import Home from './components/home/home.js'
import Login from './components/Login/login/login'
import Signup from './components/Login/signup/signup'
// import UserAdmin from './components/UserAdminProfile/UserAdmin'
import UserRouter from './components/User/index'
// import UserAdmin from './components/UserAdminProfile/UserAdmin'
// import User from './components/home/user/user'
// import UserProfil from './components/UserProfile/UserProfile'
// import EditProfile from './components/UserProfile/editerProfil'
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
       <Route exact path="/" component={Home}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/signup" component={Signup}/>
       <Switch>
        <PrivateRoute exact path="/profile" component={UserRouter} />
        </Switch>
            <Switch>
              <PrivateRoute
                  exact
                  path="/"
                  component={Home}
                />
              </Switch>

       </div>
       <Footer/> 
       </div>   
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;