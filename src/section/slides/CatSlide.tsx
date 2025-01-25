import './style.scss';
import Slider from '../../components/slides/Slider';
import CatCard from '../../components/cards/CatCard';
import { catData } from '../../data';


const CatSlide = () => {


  return (
      <Slider deviceType=''>
        {
          catData?.map((item: any) => (
            <CatCard key={item?._id} item={item}/>
          ))
        }
      </Slider>
  )
}

export default CatSlide
