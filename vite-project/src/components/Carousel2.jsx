import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import '../styles/Swiper.css';
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import Data from '../Data.json';
import 'swiper/css/autoplay'



const carousel = () => {
  return (
  <>
  <h1>Popular Mytinerarys</h1>
    <Swiper
    
        autoplay={true}
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Autoplay]}
        className="mySwiper"
      >
        
        {Data.map((result,index)=>(
        <SwiperSlide key={index}>
          <img src={result.url}  alt="" />
          <p class="carousel-image-p">{result.title}</p>
        </SwiperSlide>
        ))}
        
        
      </Swiper>
      </>
  )
}

export default carousel