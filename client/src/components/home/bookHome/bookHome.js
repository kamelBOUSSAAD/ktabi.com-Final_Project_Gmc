import React from 'react'
import '../bookHome/bookHome.css'


const Book=()=>{
    return(
        <div className="Container-bookHome">

            <div className="Description-Book">
            <div><h2>Description de livre</h2>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </div>
            <div className="userImage">
            {/* <img src="https://cdn.iconscout.com/icon/free/png-256/user-account-profile-avatar-person-male-2-21049.png" 
            alt="userImage" className="book-image"/> */}
            </div>
            </div>

            <div className="image-TitleBook">
             <img src="https://images.gr-assets.com/books/1474171184l/136251.jpg" 
            alt="harryPotter" className="book-image"/> 
            <div>Titre</div>
            </div>


            


        </div>
    )
}

export default Book;