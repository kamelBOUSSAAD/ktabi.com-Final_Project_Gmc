import React from 'react'
import User from '../user/user'
import '../topUsers/topUsers.css'


const TopUsers=()=>{
    return(
        <div className="user-div">
       <div className="users-group">
       <div className="topUsers"><h2>Top Users</h2></div>
        <div><User/></div>
        <div><User/></div>
        <div><User/></div>
        <div><User/></div>
        </div>
        </div>
    )
}
export default TopUsers;