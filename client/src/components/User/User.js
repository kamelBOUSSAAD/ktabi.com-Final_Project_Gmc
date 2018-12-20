import React from 'react'
import {Link} from 'react-router-dom'
import '../User/User.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from '../home/book/book'
import User from '../home/user/user'

const UserProfile=()=>{
    return(
      <div>
        <div className="container">
        <div className="booksBlock">
         <div className="row ">
          <div className="col"><Link to=""><Book className="bookStyle"/></Link></div>
          <div className="col"><Link to=""><Book className="bookStyle"/></Link></div>
          <div className="col"><Link to=""><Book className="bookStyle"/></Link></div>
          <div className="col"><Link to=""><Book className="bookStyle"/></Link></div>
          </div>
          <div className="row ">
          <div className="col"><Link to=""><Book className="bookStyle"/></Link></div>
          <div className="col"><Link to=""><Book className="bookStyle"/></Link></div>
          <div className="col"><Link to=""><Book className="bookStyle"/></Link></div>
          <div className="col"><Link to=""><Book className="bookStyle"/></Link></div>
          </div>
          
        </div>
          <div className="userProfileContainer">
        <div className="userinfo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HFLw9fcwYyNkUls-_g8umpEqAZlp4WHViwoFqr9vq3wqhlmu" 
          alt="avatar"/>
          <h3>Nom Admin</h3>
          <div><Link to="/login"><button className="disconnectButton">Deconnecter</button></Link></div> 
        </div>
        </div>
        </div>
        <div><button>Supprimer Livre</button></div> 
        <div style={{"display":"flex","flex-direction":"column"}}>
        <div className="booksBlock">
        <div className="Listbooks">
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
          </div> 
        </div>
        <div><button className="deleteButton">Supprimer User</button></div>
        </div>
        </div>
    )
}

export default UserProfile