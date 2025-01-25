import React from 'react';
import './reviews.scss';
import ReviewCard from '../reviewcard/ReviewCard';


const Reviews = () => {
  return (
    <div className="reviews">
        <h2>Reviews</h2>

        <ReviewCard/>
    </div>
  )
}

export default Reviews;
