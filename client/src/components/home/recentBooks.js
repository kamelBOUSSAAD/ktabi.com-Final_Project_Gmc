import React from 'react'
import Book from '../../components/home/book';
import '././recentBooks.css'

const RecentBooks=(props)=>{
    return(
   <div>
      <h2 style={{"text-align":"center"}}>Recent Books</h2>
      <div className="RecentBooks-block">
      <Book/><Book/><Book/><Book/>
      <Book/><Book/><Book/><Book/><Book/>
      </div>
   </div>
    )
}
export default RecentBooks;