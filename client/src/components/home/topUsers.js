import React from 'react'
import User from './user'
import './././topUsers.css'

const TopUsers=()=>{
    return(
        <div className="user-div">
        <h2 style={{"text-align":"center"}}>Top Users</h2>
       <div className="users-group">
        <User/><User/><User/> <User/><User/><User/>
        </div>
        </div>
    )
}
export default TopUsers;