import { Link } from 'react-router-dom';
import './catcard.scss';


const CatCard = ({item}: any) => {
  return (
    <Link to={`/gigs/${item.id}`}>
      <div className='gigcart'>
        <img src={item?.img} alt="" className="" />
        <span className="title">{item?.title}</span>
        <span className="desc">{item?.desc}</span>
      </div>
    </Link>
  )
}

export default CatCard;

