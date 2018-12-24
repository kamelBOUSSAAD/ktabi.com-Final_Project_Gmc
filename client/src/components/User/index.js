import React, { Component } from "react";
import { BrowserRouter, Route, } from "react-router-dom";

import User from "./User";
import UserData from "./edit profiel/UserData";
import UserBooks from "./UserBooks";
class UserRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
         <User/>
          <div>
         
          <Route exact path="/edit-profile" render={ ()=><UserData/>}/>
          <Route exact path="/user-books" render={ ()=><UserBooks/>} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default UserRouter;
