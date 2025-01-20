import { Link } from 'react-router-dom';
import './gigcard.scss';
import { useSingleUser } from '../../utils/api';



const GigCard = ({item}: any) => {


  const { data } = useSingleUser(item.userId);


  return (
    <Link to={`/gigs/${item._id}`} className='link'>
        <main className='gigcard'>
        <img src={item.cover} alt="" />
        <div className="info">
          <div className="user">
            <img src={data?.img ? data.img : '/img//noavatar.jpg'} alt="" />
            <span>{data?.username}</span>
          </div>
          <p>{item.desc}</p>

          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{!isNaN(Math.round(item?.totalStars / item?.starNum)) && 
            Math.round(item?.totalStars / item?.starNum)}</span>
          </div>

        </div>
        <hr />
        
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
    
        </main>
    </Link>
  )
}

export default GigCard
