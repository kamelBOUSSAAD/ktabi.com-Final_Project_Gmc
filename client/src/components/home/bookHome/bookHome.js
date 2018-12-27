import React from 'react'
import {Link} from 'react-router-dom'
import StarRating from "../bookHome/StarRating"
import bookImage from '../../../images/Elif book.jpg'
import '../bookHome/bookHome.css'
import './bookHome.css'

// style={{"width": "500px","height":"190px","margin-bottom":"3px"}
const Book=({book})=>{
   return(      
<div className="card text-center" style={{"width": "250px","height":"100%","margin-bottom":"15px"}}>

<div className="card-body">
          
               <h3 className="">{book.title}</h3>
               <h4 className="">{book.author}</h4>
               
                 <div>
                 <StarRating starNumber={book.rate} changeNumberRating={()=>{}} />
                 </div>
               <Link to=""><img className="imageStyle" src={bookImage} alt=""/></Link>
                    <h4>{book.categorie}</h4>
                  <div className="bookDescription">
                     <p>{book.description}</p>
                  </div>
               <div className="des">{book.operation}</div>
          
</div>
</div>
  
    )
}

export default Book;