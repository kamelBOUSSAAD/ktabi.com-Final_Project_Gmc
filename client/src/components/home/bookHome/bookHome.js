import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../bookHome/StarRating";
import bookImage from "../../../images/book-cover-default.jpg";

import "../bookHome/bookHome.css";
import "./bookHome.css";

const Book = ({ book }) => {
  return (
    <div
      className="card text-center"
      style={{ width: "250px", height: "100%", "margin-bottom": "15px" }}
    >
      <div className="card-body">
        <h3 className="">{book.title}</h3>
        <h4 className="">{book.author}</h4>

        <div>
          <StarRating starNumber={3} changeNumberRating={() => {}} />
        </div>
        <Link to="">
          <img className="imageStyle" src={bookImage} alt="" />
        </Link>
        <h4>{book.categorie}</h4>
        <div className="bookDescription">
          <p>{book.description}</p>
        </div>
        <div className="des">{book.operation}</div>
      </div>
    </div>
  );
};

export default Book;
