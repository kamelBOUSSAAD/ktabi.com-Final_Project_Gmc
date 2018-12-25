import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/profileActions";
import Spinner from "../../common/Spinner";
import "./User.css";
import isEmpty from "../../../validation/is-empty";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let userProfile;

    if (profile === null || loading) {
      userProfile = <Spinner />;
    } else {
      const profile = this.props.profile.profile;

    

      // If profile field doesnt exist, make empty string
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.address = !isEmpty(profile.address) ? profile.address : " ";
      profile.phone = !isEmpty(profile.phone) ? profile.phone : " ";
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      userProfile = (
        <div className="user-data">
          <h1 className="display-4 text-left">Bienvenue : {user.name}</h1>

          <p> please add some info</p>
          <div className="data-container">
            <div className="img-container">
              <img src={user.avatar} width = '110px' height = '110px' alt="img-avatar" />
            </div>
            <div className="data">
              <h3 className="data">Nom : {user.name}</h3>
              <h3 className="data">Ville : {profile.location}</h3>
              <h3 className="data">Adresse : {profile.address}</h3>
              <h3 className="data">Téléphone : {profile.phone}</h3>
              <h3 className="data">Nom de profile: {profile.handle}</h3>
              <h3 className="data">Date de profile: {profile.date}</h3>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="profile">
        {userProfile}
        <div className="menu">
          <Link to="/user-books">
            <button className="button-menu" type="">
              Mes livres
            </button>
          </Link>

          <Link to="/edit-profile">
            <button className="button-menu" type="">
              Editer le profil
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(UserProfile);
