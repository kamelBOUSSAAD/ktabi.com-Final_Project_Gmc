import React from 'react'
import {Link} from 'react-router-dom'
import Book from '../home/bookHome/bookHome.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../bodyHome/bodyHome.css'

const BodyHome=()=>{
    return(
    <div className="">
      <div className="BooksHeader">
          <div>
          <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-recent-tab" data-toggle="tab" href="#Livres-recents" role="tab" aria-controls="nav-recent" aria-selected="true">Livres Recents</a>
    <a class="nav-item nav-link" id="nav-top-tab" data-toggle="tab" href="#Top-livres" role="tab" aria-controls="nav-top" aria-selected="false">Top Livres</a>  
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-recent-tab">...</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-top-tab">...</div>
</div>
        
          </div>
      </div>
      <div className="BooksContent">
      <div className="bookStyle"><Book/></div>
      <div className="bookStyle"><Book/></div>
      <div className="bookStyle"><Book/></div>
      <div className="bookStyle"><Book/></div>
      <div className="bookStyle"><Book/></div>
      </div>
    <div> 
  <ul className="pagination">
    <li><Link to="">1</Link></li>
    <li><Link to="">2</Link></li>
    <li><Link to="">3</Link></li>
    <li><Link to="">4</Link></li>
    <li><Link to="">5</Link></li>
  </ul>
  </div> 


     </div>
        
    )
}

export default BodyHome;