import React from 'react'

const Signup=()=>{
    return(
        <div className="signup-form">
        <div className="inputDisplay"> User Name:<input type="text" placeholder="User Name"></input></div>
        <div className="inputDisplay">Email:<input type="text" placeholder="Email"></input></div>
        <div className="inputDisplay">Password:<input type="password" placeholder="password"></input></div>
        <div className="inputDisplay">Confirm password:<input type="password" placeholder="confirm password "></input></div>
        <div className="inputDisplay">Adresse:<input type="text" placeholder="adresse"></input></div>
        <div className="inputDisplay"> Mobile:<input type="text" placeholder="mobile"></input></div>
         <select>
             <option value="city"></option>
             <option value="Ariana"></option><option value="Béja"></option><option value="Ben Arous"></option><option value="Bizerte"></option><option value="Gabes"></option>
            <option value="Gafsa"></option><option value="Jendouba"></option><option value="Kairouan"></option><option value="Kasserine"></option><option value="Kébili"></option>
            <option value="Kef"></option><option value="Mahdia"></option><option value="Manouba"></option><option value="Médenine"></option><option value="Mounastir"></option>
            <option value="Nabeul"></option><option value="Sfax"></option><option value="Sidi Bouzid"></option><option value="Siliana"></option><option value=""></option><option value="Sousse"></option>
            <option value="Tataouine"></option><option value="Touzeur"></option><option value="Tunis"><option value="Zaghouan"></option>
        </option>
        </select>
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
        </div>
    )
}

export default Signup;