import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// import PrivateRoute from "./components/common/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store";
import Footer from "./components/layout/Footer/footer.js";
import Header from "./components/layout/Header/header.js";
import Home from "./components/home/home.js";
import Login from "./components/Login/login/login";
import Signup from "./components/Login/signup/signup";
import UserRouter from "./components/User/index";
import Guide from './components/home/guide'

import "./App.css";

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
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />

            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Switch>
                <Route path="/profile" component={UserRouter} />
              </Switch>
              {/* <Switch>
              <PrivateRoute
                  exact
                  path="/"
                  component={Home}
                />
              </Switch> */}
            </div>
             <Guide />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
