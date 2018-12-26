import React, { Component } from "react";
import { BrowserRouter, Route, } from "react-router-dom";

import User from "./Profile/User";
import Edit_Books from "./Edit_profile/Create_Edite_User";
import User_Books from "./User_Books/Add_Container";
class UserRouter extends Component {
  render() {  
    return (
      <BrowserRouter>
        <div className="">
         <User/>
          <div>
         
          <Route  path="/edit-profile" render={ ()=><Edit_Books/>}/>
          <Route  path="/user-books" render={ ()=><User_Books/>} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default UserRouter;
