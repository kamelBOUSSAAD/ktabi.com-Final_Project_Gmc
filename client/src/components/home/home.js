import React from 'react'
import Search from '../Search/search.js'
import BodyHome from '../bodyHome/bodyHome.js'
import RecentUsers from '../home/Recent-User/recentUsers'
// import Guide from '../home/guide'
import '../home/home.css'

const Home=()=>{
    return(
    <div className="row homeContainer">
     <div className="col-lg-3 col-md-3 col-sm-12">
      <Search/>
     </div> 
     <div className="col-lg-6 col-md-6 col-sm-12">
     <BodyHome/>
     </div>
     <div className="col-lg-3 col-md-3 col-sm-12">
     <RecentUsers/>
     </div>
 
     </div> 
    )
}
export default Home;