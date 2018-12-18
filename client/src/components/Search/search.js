import React from 'react'
import './././search.css'

class Search extends React.Component{
    render(){
        return(
            <div className="searchContainer">
            <div>
           <input  className="searchBar" placeholder='Search...'></input> 
            </div>
            <div className="searchOptions">
            <div >
             <select className="selectStyle">
             <option value="Aventure"></option>
             <option value="Bande dessiné"></option>
             <option value="Classique"></option>
             <option value="Comédie"></option>
             <option value="Développement paersonnel"></option>
             <option value="Documentaire"></option>
             <option value="Géographie"></option>
             <option value="Histoire"></option>
             <option value="Livre de cuisine"></option>
             </select>
             </div>
             <div >
             <select className="selectStyle">
             <option value="city"></option>
             <option value="Ariana"></option>
             <option value="Béja"></option>
             <option value="Ben Arous"></option>
             <option value="Bizerte"></option>
             <option value="Gabes"></option>
             <option value="Gafsa"></option>
             <option value="Jendouba"></option>
             <option value="Kairouan"></option>
             <option value="Kasserine"></option>
             <option value="Kébili"></option>
             <option value="Kef"></option>
             <option value="Mahdia"></option>
             <option value="Manouba"></option>
             <option value="Médenine"></option>
             <option value="Mounastir"></option>
            <option value="Nabeul"></option>
            <option value="Sfax"></option>
            <option value="Sidi Bouzid"></option>
            <option value="Siliana"></option>
            <option value="Sousse"></option>
            <option value="Tataouine"></option>
            <option value="Touzeur"></option>
            <option value="Tunis"> </option>
            <option value="Zaghouan"></option>
             </select>
             </div>
             <div>
             <select className="selectStyle">
                 <option value="Echange"></option>
                 <option value="Gratuit"></option>
             </select>
             </div>
            </div>
            </div>
        )
    }
}

export default Search;