import React, { FormEvent } from 'react';
import './reviews.scss';
import ReviewCard from '../reviewcard/ReviewCard';
import { useAddReview, useGetReviews } from '../../utils/api';


const Reviews = ({gigId}: { gigId: string }) => {

  const { data } = useGetReviews(gigId);

  const mutation = useAddReview()

  const handleSubmit =  (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const desc = (form.querySelector('input[type="text"]') as HTMLInputElement).value;
    const star = (form.querySelector('select') as HTMLSelectElement).value;

    mutation.mutate({ desc, star, gigId });
  };


  return (
    <div className="reviews">
        <h2>Reviews</h2>

         {data?.map((review: any) => (
           <ReviewCard review={review} key={review?._id}/>
         ))} 
               <div className="add">
        <h3>Add a review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="write your opinion" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Reviews;
