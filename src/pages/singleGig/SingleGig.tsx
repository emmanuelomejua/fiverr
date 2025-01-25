import React from 'react';
import './singlegig.scss';
import stars from './star.png';
import Slide from '../../components/slides/Slider';
import { useParams } from 'react-router-dom';
import { useGetSingleGig, useSingleUser } from '../../utils/api';
import Reviews from '../../section/reviews/Reviews';



const SingleGig = () => {


  const { id } = useParams();

  const { data } = useGetSingleGig(id);

  const { data:user, error, isPending } = useSingleUser(data?.userId)

  console.log(user);


  return (
    <main className='gig'>
      <div className="cont">
        <section className="left">
        <span className='bc'>FIVERR {`>`} GRAPHICS & {`>`} DESIGN </span>
        <h1>{data?.title}</h1>

        {isPending ? 'Loading...': error ? '':
        <div className="user">
          <img src="" alt="" className="" />
          <span>Dev Tompolo</span>
          <div className="stars">
            <img src={stars} alt="" className="" />
            <img src={stars} alt="" className="" />
            <img src={stars} alt="" className="" />
            <span>3</span>
          </div>        
        </div>
        }

        <Slide deviceType=''>
            <img src='https://images.pexels.com/photos/1462935/pexels-photo-1462935.auto=compress&cs=tinysrgb&w=1600' alt=""/>
            <img src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.auto=compress&cs=tinysrgb&w=1600" alt="" />
            <img src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"  alt="" />
        </Slide>
        


        <h2>About This Gig</h2>
          <p>"https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
            {data?.desc}
          </p>

          { isPending ? 'Loading...': error ? '':
          <div className="seller">
          <h2>About The Seller</h2>
            <div className="user">
              <img
                src={data?.img || '/img/noavatar.jpg' }
                alt=""
              />
              <div className="info">
                <span>{data?.username}</span>
                {!isNaN(Math.round(data?.totalStars / data?.starNum)) && (
                  <div className="stars">
                    {Array.from({ length: Math.round(data?.totalStars / data?.starNum) }).map((_, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                    ))}
                    <span>{Math.round(data?.totalStars / data?.starNum)}</span>
                  </div>
                )}
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">{data?.country}</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
                <p>{data?.desc}</p>
            </div>
              <Reviews/>

              </div>
              }
              
  </section>

        <section className="right">
        <div className="price">
            <h3>{data?.shortTitle}</h3>
            <h2>$ {data?.price}</h2>
          </div>
          <p>
            {data?.shortDesc}
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>{data?.deliveryDate || 'No'} Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>{data?.revisionNum} Revisions</span>
            </div>
          </div>
          <div className="features">
          {
            data?.features?.map((feature: string) => (
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>{feature}</span>
            </div>
            ))
          }
          </div>
          <button>Continue</button>
        
        </section>
      </div>
    </main>
  )
}

export default SingleGig;
