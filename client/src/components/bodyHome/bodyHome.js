import React from 'react'
import User from '../home/user/user.js'
import Book from '../home/book/book.js'
import '../bodyHome/bodyHome.css'

const BodyHome=()=>{
    return(
    <div className="BooksContainer">
      <div className="BooksHeader">
      <div><User/></div>
          <div>
          <select className="selectStyle">
              <option value="Livres Recents"></option>
              <option value="Top Livres"></option>
          </select>
          </div>
      </div>
      <div className="BooksContent">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      </div>

     
     </div>
        
    )
}

export default BodyHome;