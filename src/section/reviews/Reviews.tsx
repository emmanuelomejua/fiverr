import React from 'react';
import './reviews.scss';
import ReviewCard from '../reviewcard/ReviewCard';
import { useGetReviews } from '../../utils/api';


const Reviews = ({gigId}: { gigId: string }) => {

  const { data } = useGetReviews(gigId);


  return (
    <div className="reviews">
        <h2>Reviews</h2>

         {data?.map((review: any) => (
           <ReviewCard review={review}/>
         ))} 
    </div>
  )
}

export default Reviews;
