import React from 'react'
import {Link} from 'react-router-dom'
import StarRating from "../bookHome/StarRating"
import bookImage from '../../../images/Elif book.jpg'
import '../bookHome/bookHome.css'
import  '../bookHome/StarRating.css'


const Book=(book)=>{
return(      
<div>
<div className="card text-center" style={{"max-width": "210px","height":"100%","margin-bottom":"15px"}}>

<div className="card-body">
<h4 className="">{book.title}</h4>
<div>
<StarRating starNumber={2} changeNumberRating={()=>{}} />
</div>
    <Link to=""><img className="imageStyle" src={bookImage} alt=""/></Link>
<div className="bookDescription">
<p>{book.description}</p>
</div>
<Link to="/"><button>{book.operation}</button></Link>
</div>
</div>
</div>
    )
}

export default Book;