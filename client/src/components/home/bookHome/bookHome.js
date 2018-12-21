import React from 'react'
import '../bookHome/bookHome.css'


const Book=()=>{
    return(
        <div className="row Container-bookHome">

            <div className="col-lg-6 Description-Book">
            <div><h2>Description de livre</h2>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </div>
            {/* <div className="userImage">
             <img src="https://cdn.iconscout.com/icon/free/png-256/user-account-profile-avatar-person-male-2-21049.png" 
            alt="userImage" className="book-image"/> 
            </div> */}
            </div>

            <div className="col-lg-6 image-TitleBook">
             <img src="https://images.gr-assets.com/books/1474171184l/136251.jpg" 
            alt="harryPotter" className="book-image"/> 
            <div><h2>Harry Potter et le Prince de sang-mêlé </h2></div>
            </div>


            


        </div>
    )
}

export default Book;