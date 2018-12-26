import React from 'react'
import {Link} from 'react-router-dom'
import StarRating from "../bookHome/StarRating"
import bookImage from '../../../images/Elif book.jpg'
// import '../bookHome/bookHome.css'
// import  '../bookHome/StarRating.css'
import './book.css'

// style={{"width": "500px","height":"190px","margin-bottom":"3px"}
const Book=({book})=>{
   return(      
   
    //    <div >
    //      <div className="card" >

    //          <div className="bolock-1"> 
    //             <div className="rate"> /></div>
    //             <div className="img">  <img  src={bookImage} alt="book"/> </div>
           

                   
    //                <div className="header-card">
    //                   <div className="title">{book.title}</div>
    //                   <div className="auteur">{book.author}</div>
    //                </div>
              
          
    //               <div className="card-body">
    //                  <div className="des">{book.description}</div>
    //                  <div className="cat"> {book.categorie}  </div>
    //                </div>

    //             <div className="card-footer">
    //                <div className="user"> User </div>
    //                <div className="operation">{book.operation} </div>
    //            </div>
    //            </div>
    // </div>
    // </div>
     
    


          <div className="card-body" style={{"width": "100%","height":"190%","margin-bottom":"3px"}}>
               <h3 className="">{book.title}</h3>
               <h5 className="">{book.author}</h5>
               
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
  
    )
}

export default Book;