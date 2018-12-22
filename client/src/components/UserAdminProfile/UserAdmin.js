import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../UserAdminProfile/UserAdmin.css'

const UserAdmin=()=>{
    return(
        
 <div className="container">
  <div className="card" >
    <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" 
    style={{"width":"80px"}} alt="Card image"/>
    <div className="card-body">
      <h4 className="card-title">Nom admin</h4>
      <p className="card-text">infos admin</p>
      <a href="/login" class="btn btn-primary">Deconnecter</a>
    </div>
  </div> 
  </div> 
        
    )
}

export default UserAdmin