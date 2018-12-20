import React from 'react'
import '../login/login.css'
import '../../../App.css'

const Login = () => {
    return (
        <div>
           
            <div className="login-form">
                <from>

                    <div className = "email-block">
                    <div className="login-title">Email </div>
<<<<<<< HEAD
                   
=======
>>>>>>> eb64daeb731d2ae9fe97890e6eacf33bc4165dc6
                    </div>
                    <input className="input-style" type="text" ></input>

                    <div className = "password-block">
                    <div className="login-title">Mot de passe </div>
                    </div>
                    <input className="input-style" type="password"></input>
                    <button className="button-connexion" type="submit">Connexion</button>
                    <div className="oublie"> Inscrivez vous </div>
                    <div className="oublie"> Mot de passe oublié?</div>
                </from>

            </div>
        </div>

    )
}

export default Login;
