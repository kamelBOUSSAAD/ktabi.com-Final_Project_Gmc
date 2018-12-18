import React from 'react'

const Login=()=>{
    return(
        <div className="loginForm">
        Email:<input type="text" placeholder="email"></input>
        Password:<input type="password" placeholder="password"></input>
        <button type="submit">Sign in</button>
        </div>
    )
}

export default Login;
