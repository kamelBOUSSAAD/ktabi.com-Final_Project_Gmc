import React, { Component } from "react";
import { getRecentUsers } from '../../../actions/userActions' ;
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserItem from './user.js'
import './recentUsers.css'


class UsersRecent extends Component {
 
  componentDidMount() {
      this.props.getRecentUsers();
    }


  render() {
   
    const UsersMap = () =>
    !this.props.users.length===0 ? 
       <div className=""> 
        <div>
          {/* <img src={} width="80px" height="80px" alt="not-found(result"/> */}
        </div>
        Auccn livre a votre profile
        </div> :
      this.props.users.map((currentElement, i) => (
        <div key={i}>
          <UserItem user={currentElement} />
        </div> ));
    


    return(
        <div className="user-div">
        <div className="users-group">
        <div className="topUsers"><h2>Top Users</h2></div>
        <UsersMap />
        </div>
        </div>
      )
}

}

UsersRecent.propTypes = {
    getRecentUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = state => ({
   
    users : state.usres.users_recent
  });
  
  export default connect(
    mapStateToProps,
    { getRecentUsers }
  )(UsersRecent);
  





