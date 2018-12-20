import React from 'react'
import '../Header/header.css'
import logo from '../../../images/logo.png';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
    <div className="Header-Container">
      <div className="header">
         <div>
         <Link to='/'><img className="logo" src={logo} alt="logo"/> </Link> 
         </div>
          <div className="loginContainer">
              <div className="login">
              <Link to='/login'> <button className="button-login" type="button">login</button></Link> 
              </div>
              <div className="sign up">
              <Link to='/signup'><button className="button-signup" type="button">Sign up</button></Link>
              </div>
            </div>
       </div>
    </div>

        )
    }
}

export default Header;