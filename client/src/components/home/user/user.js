
import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../user/user.css'


const User=()=>{
    return(
    // <div className="row card-user" >
    //     <div className="col-lg-6"><img src="https://cdn.iconscout.com/icon/free/png-256/user-account-profile-avatar-person-male-2-21049.png"
    //       alt='userImage'/></div>
    //     <div className="col-lg-6 ">
    //      <h2>nOM uSER</h2>
    //      <p>email</p>
    //      <p>mobile</p>
    //     </div>
    //   </div>
    <div class="row userCard ">
    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
  <Link to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14KkHi4C8b1SwdZNY3Ihokxu9lYlcfkGHNXST4EvqFSCtd47j" alt=""/></Link>
  </div>
  <article className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
    <h2>john doe</h2>
    <p>
      <a href="/">johnDoe@hotmail.fr</a>
      <p>+216 55 200 032</p>
    </p>
  </article>
</div>
    )
}
export default User;