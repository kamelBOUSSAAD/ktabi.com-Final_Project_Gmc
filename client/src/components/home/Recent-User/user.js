import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../../../images/user.png";
import "./user.css";

const User = ({ user }) => {
  return (
    // <div className="row card-user" >
    //     <div className="col-lg-6"><img src="https://cdn.iconscout.com/icon/free/png-256/user-account-profile-avatar-person-male-2-21049.png"
    //       alt='userImage'/></div>
    //     <div className="col-lg-6 ">
    //      <h2>nOM uSER</h2>
    //      <p>email</p>
    //      <p>mobile</p>
    //     </div>
    //   </div>
    <div class="row user-Card ">
      <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
        <img
          className="user-img"
          src={user.avatar}
          alt={user.name}
          style={{}}
          title=""
        />{" "}
        <Link to="">
          <img src={user} alt="" />
        </Link>
      </div>
      <article className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
        <h2>{user.name}</h2>
        <p>
          <a href="/">
            <p className="textStyle">Date d'inscription   {user.date.slice(0, 10)+' '+user.date.slice(11, 19)}</p>
          </a>
        </p>
      </article>
    </div>
  );
};

export default User;
