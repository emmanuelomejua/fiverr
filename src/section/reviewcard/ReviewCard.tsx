import React from 'react';
import './reviewcard.scss';


const ReviewCard = () => {
  return (
    <div className='review'>
        <div className="user">
            <img
                className="pp"
                src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
            />
            <div className="info">
                <span>Sidney Owen</span>
                <div className="country">
                <img
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                    alt=""
                />
                <span>Germany</span>
                </div>
            </div>
            </div>
            <div className="stars">
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <span>5</span>
            </div>
            <p>
            The designer took my photo for my book cover to the next level!
            Professionalism and ease of working with designer along with
            punctuality is above industry standards!! Whatever your project
            is, you need this designer!
            </p>
            <div className="helpful">
            <span>Helpful?</span>
            <img src="/img/like.png" alt="" />
            <span>Yes</span>
            <img src="/img/dislike.png" alt="" />
            <span>No</span>
        </div>
        
        <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
    </div>
  )
}

export default ReviewCard;
