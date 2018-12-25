import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../../common/TextFieldGroup";
// import User from '../User';
// import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
// import InputGroup from '../common/InputGroup';
// import SelectListGroup from '../common/SelectListGroup';
import "./edit.css";
import {
  createProfile,
  getCurrentProfile
} from "../../../actions/profileActions";
import isEmpty from "../../../validation/is-empty";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      location: "",
      address: "",
      phone: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Bring skills array back to CSV
      //   const skillsCSV = profile.skills.join(',');

      // If profile field doesnt exist, make empty string
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.address = !isEmpty(profile.address) ? profile.address : "";
      profile.phone = !isEmpty(profile.phone) ? profile.phone : "";
      profile.location = !isEmpty(profile.location) ? profile.location : "";
  

      // Set component fields state
      this.setState({
        handle: profile.handle,
        location: profile.location,
        address: profile.address,
        phone: profile.phone
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      location: this.state.location,
      address: this.state.address,
      phone: this.state.phone
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
 
    const { errors } = this.state;

    return (

      <div className="edit">
      
        <h1 className="display-4 text-left">Editer le profil</h1>
        <small className="champ">* = champs obligatoires</small>
        <div>
          
          <form className="data-form" onSubmit={this.onSubmit}>
            <TextFieldGroup
              placeholder="Nom de profile"
              name="handle"
              value={this.state.handle}
              onChange={this.onChange}
              error={errors.handle}
              info=""
            />

            <TextFieldGroup
              placeholder="Ville"
              name="location"
              value={this.state.location}
              onChange={this.onChange}
              error={errors.location}
              info=""
            />
            <TextFieldGroup
              placeholder="Adresse"
              name="address"
              value={this.state.address}
              onChange={this.onChange}
              error={errors.address}
              info=""
            />
            <TextFieldGroup
              placeholder="Téléphone"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
              error={errors.phone}
              info=""
            />


            
            <button className="button-enregistrer" type="submit">
            Enregistrer
            </button>
          
          </form>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
