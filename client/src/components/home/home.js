import React from 'react'
import Search from '../Search/search.js'
import BodyHome from '../bodyHome/bodyHome.js'
import TopUsers from '../home/topUsers/topUsers.js'
import '../home/home.css'

const Home=()=>{
    return(
    <div className="row homeContainer">
     <div className="col-lg-4 col-md-4  ">
      <Search/>
     </div> 
     <div className="col-lg-4 col-md-4 ">
     <BodyHome/>
     </div>
     <div className="col-lg-4 col-md-4 ">
     <TopUsers/>
     </div>
     </div> 
    )
}
export default Home;