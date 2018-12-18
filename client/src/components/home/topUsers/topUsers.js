import React from 'react'
import User from '../user/user'
import '../topUsers/topUsers.css'


const TopUsers=()=>{
    return(
        <div className="user-div">
        <h2 style={{"text-align":"center"}}>Top Users</h2>
       <div className="users-group">
        <div><User/></div>
        <div><User/></div>
        <div><User/></div>
        </div>
        </div>
    )
}
export default TopUsers;