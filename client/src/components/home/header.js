import React from 'react'
import Button from './././button.js'
import './././header.css'

class Header extends React.Component{
    render(){
        return(
            <div className="Header-Container">
            <div className="header">
            <img src="https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.15752-9/48339959_275164633190618_7988191433104293888_n.png?_nc_cat=100&_nc_ht=scontent.fnbe1-1.fna&oh=90cef61142791d9ae9a94f1986a31754&oe=5CAAAA96" alt="logo"/>
            <div className="login">
              <div><Button value={"Login"}/></div>
              <div><Button value={"Sign up"}/></div>
            </div>
            </div>
            </div>

        )
    }
}

export default Header;