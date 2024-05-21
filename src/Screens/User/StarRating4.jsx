import React from 'react';
import '../Lawyer/style.scss'

const StarRating4 = ({rating}) => {

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <img
            key={index}
            src={starValue <= rating ? '../svg.png' :  '../svg (1).png'}
            alt={`Star ${starValue}`}
            // onClick={() => handleStarClick(starValue)}
            style={{ width: '18px', height: '18px', cursor: 'pointer', margin:"0px 0px" }}
          />
        );
      })}
    </div>
  );
};

export default StarRating4;
