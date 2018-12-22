import React from 'react'
import './././search.css'

class Search extends React.Component{
    render(){
        return(
            <div className="searchContainer">
            <div className="searchbarStyle" style={{"margin-top":"50px"}}>
            <form>
           <input  className="searchBar" placeholder='Search...'></input>
           <button type="submit"><i class="fa fa-search"></i></button>
           </form>
            </div>
            <div className="searchOptions">
            <div>
            <select className="selectStyle">
             <option value="Category" selected>Category</option>  
             <option value="Aventure">Aventure</option>
             <option value="Bande dessiné">Bande dessiné</option>
             <option value="Classique">Classique</option>
             <option value="Comédie">Comédie</option>
             <option value="Développement personnel">Développement paersonnel</option>
             <option value="Documentaire">Documentaire</option>
             <option value="Géographie">Géographie</option>
             <option value="Histoire">Histoire</option>
             <option value="Livre de cuisine">Livre de cuisine</option>
             </select>
             </div>
             <div >
             <select className="selectStyle">
             <option value="City" selected>City</option>
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
             </div>
             <div>
             <select className="selectStyle">
                 <option value="Echange">Echange</option>
                 <option value="Gratuit">Gratuit</option>
             </select>
             </div>
            </div>
            </div>
        )
    }
}

export default Search;