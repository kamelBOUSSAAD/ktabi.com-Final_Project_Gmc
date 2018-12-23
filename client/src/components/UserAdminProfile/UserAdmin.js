import React from 'react'
import{Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../UserAdminProfile/UserAdmin.css'

const UserAdmin=()=>{
    return(  
<div >
<div className="card card-nav-tabs">
  <div className="card-header card-header-warning">
  <img className="card-img-top" src="https://img.icons8.com/color/260/user-male-circle.png" 
    style={{"width":"80px"}} alt="adminImage"/>
  </div>
  <div className="card-body">
    <h4 className="card-title">Nom Admin</h4>
    <p className="card-text">Administrateur</p>
    <p className="card-text">administrateur2018@gmail.com</p>
    <Link to="/login"><div className="btn btn-primary">Deconnecter</div></Link>
  </div>
</div>
 
<div className="admin card card-nav-tabs">
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-editProfil-tab" data-toggle="tab" href="#edit-profil" role="tab" aria-controls="nav-edit-profil" aria-selected="true">Editer profil</a>
    <a class="nav-item nav-link" id="nav-top-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-top" aria-selected="false">Livres</a> 
    <a class="nav-item nav-link" id="nav-top-tab" data-toggle="tab" href="#liste-users" role="tab" aria-controls="nav-top" aria-selected="false">Users</a>  
  </div>
  <div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-edit" role="tabpanel" aria-labelledby="nav-edit-tab"></div>
  <div class="tab-pane fade" id="nav-livres" role="tabpanel" aria-labelledby="nav-top-tab"><p></p></div>
  <div class="tab-pane fade" id="nav-users" role="tabpanel" aria-labelledby="nav-top-tab">3 page</div>
  </div>
</nav>
</div>
</div> 
 )
}

export default UserAdmin