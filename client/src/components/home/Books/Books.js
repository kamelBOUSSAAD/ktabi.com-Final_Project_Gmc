import React from 'react'
import Book from '../client/components/home/book/book.js';


const Books=()=>{
    return(
   <div>
      <div className="RecentBooks-block">
      <Book/><Book/><Book/><Book/>
      </div>
   </div>
    )
}
export default Books;