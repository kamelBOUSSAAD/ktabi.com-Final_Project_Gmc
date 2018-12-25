import React from "react";

const StarRating = props => {
  let starsList = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= props.starNumber) {
      starsList.push(
        <span
          className="fullStar"
          onClick={() => {
            props.changeNumberRating(i);
          }}
        >
          ★
        </span>
      );
    }
    if (i > props.starNumber) {
      starsList.push(
        <span
          className="emptyStar"
          onClick={() => {
            props.changeNumberRating(i);
            console.log(props.changeNumberRating(i))
          }}
        >
          ☆
        </span>
      );
    }
  }
 
  return (
    <div className="">
      <div className="stars">
        <div className="rate">{starsList}</div>
      </div>
    </div>
  )
}

export default StarRating;
