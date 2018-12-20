import React from 'react'
import '../signup/signup.css'

const Signup=()=>{
    return(
        <div className="formContainer">
        <form className="formStyle">

                    <div className = "">
                    <div className="signup-title">User Name </div>
                    </div>
                    <input className="input-style" type="text" ></input>

                    <div className = "">
                    <div className="signup-title">Email </div>
                    </div>
                    <input className="input-style" type="text" ></input>

                    <div className = "">
                    <div className="signup-title">Password </div>
                    </div>
                    <input className="input-style" type="password" ></input>

                    <div className = "">
                    <div className="signup-title">Confirm password </div>
                    </div>
                    <input className="input-style" type="password" ></input>

                    <div className = "">
                    <div className="signup-title">Adresse </div>
                    </div>
                    <input className="input-style" type="text" ></input>

                    <div className = "">
                    <div className="signup-title">Mobile </div>
                    </div>
                    <input className="input-style" type="text" ></input>

                    <div className = "">
                    <div className="signup-title">City </div>
                    </div>
            <select>
             <option value="City" selected>city</option>
             <option value="Ariana">Ariana</option>
             <option value="Béja">Béja</option>
             <option value="Ben Arous">Ben Arous</option>
             <option value="Bizerte">Bizerte</option>
             <option value="Gabes">Gabes</option>
            <option value="Gafsa">Gafsa</option>
            <option value="Jendouba">Jendouba</option>
            <option value="Kairouan">Kairouan</option>
            <option value="Kasserine">Kasserine</option>
            <option value="Kébili">Kébili</option>
            <option value="Kef">Kef</option>
            <option value="Mahdia">Mahdia</option>
            <option value="Manouba">Manouba</option>
            <option value="Médenine">Médenine</option>
            <option value="Mounastir">Mounastir</option>
            <option value="Nabeul">Nabeul</option>
            <option value="Sfax">Sfax</option>
            <option value="Sidi Bouzid">Sidi Bouzid</option>
            <option value="Siliana">Siliana</option>
            <option value="Sousse">Sousse</option>
            <option value="Tataouine">Tataouine</option>
            <option value="Touzeur">Touzeur</option>
            <option value="Tunis">Tunis</option>
            <option value="Zaghouan">Zaghouan</option>
        </select>
        <div className="submit">
        <div><button type="submit">Submit</button></div>
        <div><button type="button">Cancel</button></div>
        </div>
        </form>        
         </div>
    
)
}

export default Signup;







       