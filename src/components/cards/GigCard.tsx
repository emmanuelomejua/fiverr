import { Link } from 'react-router-dom';
import './gigcard.scss';

const GigCard = ({item}: any) => {
  return (
    <Link to='/gigs/:id' className='link'>
        <main className='gigcard'>
        <img src={item.cover} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>

          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.starNum}</span>
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
