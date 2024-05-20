import React from 'react';
import '../Lawyer/style.scss'

const StarRating2 = ({rating}) => {

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <img
            key={index}
            src={starValue <= rating ? './Vector (8).png' : './Vector (7).png'}
            alt={`Star ${starValue}`}
            // onClick={() => handleStarClick(starValue)}
            style={{ width: '30px', height: '30px', cursor: 'pointer', margin:"0px 10px" }}
          />
        );
      })}
    </div>
  );
};

export default StarRating2;
