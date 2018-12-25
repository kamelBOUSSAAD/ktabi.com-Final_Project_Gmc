import React, { Component } from 'react';
import '../Header/header.css'
import logo from '../../../images/logo.png';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';


class Header extends Component{
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
      }
    
    render(){
        const { isAuthenticated, user } = this.props.auth;


        const authLinks = (
        

            <ul className="">
          <li className="">
              <a
            href="/profile"
           className=""
              >
            <img
              className="user-img"
              src={user.avatar}
              alt={user.name}
              style={{  }}
              title=""
            />{' '}
           {user.name}
          </a>
        </li>



              <li >
            <button className="button-logout"
            href="/"
            onClick={this.onLogoutClick.bind(this)}
           
              >
            Déconnexion
          </button>
        </li>
            </ul>
            
         
          );
      
          const guestLinks = (

            <ul className="">
            <li className="login">
            <Link to='/login'> <div className="button-login" >Se connecter</div></Link> 
            </li>
            <li className="sign up">
            <Link to='/signup'><div className="button-signup" >S'inscrire</div></Link>
            </li>
            </ul>

         );







     return(

        <nav className="Header-Container">
        <div className="header">
        <div className="logo-container">
        <Link to='/'><img className="logo" src={logo} alt="logo"/> </Link> 
        </div>

        <ul className="loginContainer">

        
        </ul>
        {isAuthenticated ? authLinks : guestLinks}
        </div>
        </nav>
    



    );
  }
}



Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, { logoutUser })(Header);
  