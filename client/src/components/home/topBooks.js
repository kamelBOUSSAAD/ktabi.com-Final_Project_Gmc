import React from 'react'
import Book from '../../components/home/book';
import '././recentBooks.css'

const TopBooks=(props)=>{
    return(
   <div>
      <h2 style={{"text-align":"center"}}>Top Books</h2>
      <div className="RecentBooks-block">
      <Book/><Book/><Book/><Book/>
      <Book/><Book/><Book/><Book/><Book/>
      </div>
   </div>
    )
}
export default TopBooks;