import React, { useState } from 'react';
import './style.scss'

const StarRating = ({rating}) => {

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
      <div className='number'>{rating}</div>
      <div className='descption'>Based on 1348 Reviews</div>
    </div>
  );
};

export default StarRating;
