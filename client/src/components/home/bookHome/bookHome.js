import React from 'react'
import {Link} from 'react-router-dom'
import bookImage from '../../../images/harryPotter.jpg'
import '../bookHome/bookHome.css'


const Book=()=>{
    return(
        // <div className="row Container-bookHome">
        // <div className="col-lg-8">
        //     <div className=" Description-Book">
        //     <div className=""><h2>Titre</h2></div>
        //     <div>
        //         <i class="far fa-star"></i>
        //         <i class="far fa-star"></i>
        //         <i class="far fa-star"></i>
        //         <i class="far fa-star"></i>
        //         <i class="far fa-star"></i>
        //     </div>
            
        //     <div><h3>Description de livre</h3>
        //     <p style={{"color":"black"}}>lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
        //     </div>
        // </div>
        //     {/* <div className="userImage">
        //      <img src="https://cdn.iconscout.com/icon/free/png-256/user-account-profile-avatar-person-male-2-21049.png" 
        //     alt="userImage" className="book-image"/> 
        //     </div> */}
        //     </div>

        //     <div className="col-lg-3 image-TitleBook">
        //     <Link to=""><img src="https://images.gr-assets.com/books/1474171184l/136251.jpg" 
        //     alt="harryPotter" className="book-image responsive"/> 
        //     </Link>
        //     </div>

        // </div>
<div>
<div className="card text-center" style={{"max-width": "210px","height":"100%","margin-bottom":"15px"}}>

<div className="card-body">
<h4 className="">harry potter et les septs sorcieres</h4>
<div>
                 <i className="far fa-star"></i>
                 <i className="far fa-star"></i>
                 <i className="far fa-star"></i>
                 <i className="far fa-star"></i>
                 <i className="far fa-star"></i>
</div>
    <Link to=""><img src={bookImage} alt=""/></Link>
<div className="bookDescription">
<p>The sun disappeared behind the horizon today. Experts claim it could be gone for good!</p>
</div>
<Link to="/"><button>je le veux</button></Link>
</div>
</div>
</div>
    )
}

export default Book;