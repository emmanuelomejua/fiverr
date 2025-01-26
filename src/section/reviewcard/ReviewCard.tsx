import React from 'react';
import './reviewcard.scss';
import { useSingleUser } from '../../utils/api';


const ReviewCard = ({review}: any) => {

  const { data } = useSingleUser(review.userId);

  console.log(data)


  return (
    <div className='review'>
        <div className="user">
            <img
                className="pp"
                src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
            />
            <div className="info">
                <span>{data?.username}</span>
                <div className="country">
                <img
                    style={{height: '30px', width: '20px'}}
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                    alt=""
                />
                <span>{data?.country}</span>
                </div>
            </div>
            </div>
            <div className="stars">
            {Array.from({ length: Math.round(review.star) }).map((_, i) => (
            <img src="/img/star.png" alt="" />
              ))}
            <span>{review.star}</span>
            </div>
            <p> {review.desc} </p>
            <div className="helpful">
            <span>Helpful?</span>
            <img src="/img/like.png" alt="" />
            <span>Yes</span>
            <img src="/img/dislike.png" alt="" />
            <span>No</span>
        </div>

    </div>
  )
}

export default ReviewCard;
