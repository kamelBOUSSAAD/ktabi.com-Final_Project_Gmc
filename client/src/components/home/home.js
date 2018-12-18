import React from 'react'
import Search from '../Search/search.js'
import BodyHome from '../bodyHome/bodyHome.js'
import TopUsers from '../home/topUsers/topUsers.js'
import '../home/home.css'

const Home=()=>{
    return(
    <div className="homeContainer">
     <div className="search">
      <Search/>
     </div> 
     <div className="Books">
     <BodyHome/>
     </div>
     <div className="topUsers">
     <TopUsers/>
     </div>
     </div> 
    )
}
export default Home;