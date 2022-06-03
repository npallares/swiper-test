import React,{useRef} from 'react'

import { Navigation, Pagination, Lazy, Keyboard, Autoplay} from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import './Carousel.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Slice } from './Slice';


const times = (number) => (mapper) => Array(number).fill(0).map(mapper);

console.log(times(10)((_el,index)=><SwiperSlide key={index}><Slice index={index}/></SwiperSlide> ))

export const Carousel = () => {

  const swiper = useSwiper();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

    
  return (
    <div className='carousel-container'>
      <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay, Lazy]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          loop={true}
          slidesPerView={1}
          pagination={{ 
            clickable: true,  
            modifierClass:'modifier ',
            bulletClass: 'bullet',
            bulletActiveClass:'bullet-active',
          }}
          autoplay={{
            delay:3000,
            disableOnInteraction:false,	
            pauseOnMouseEnter:true,
          }}
          keyboard={{enabled: true}}
      >
        {times(10)((_el,index)=><SwiperSlide key={index}><Slice index={index}/></SwiperSlide> )}
        
        <div className='div-button-container'>
          <button ref={prevRef} className="button-next-prev" onClick={() => swiper.slideNext()} >
                <img
                  src="arrowLeft.png"
                  height="62"
                  width="62"
                  alt="icono"
                /> 
          </button>
          <div className='grow'></div>
          <button ref={nextRef} className="button-next-prev" onClick={() => swiper.slidePrev()} >
                <img
                  src="arrowRight.png"
                  height="62"
                  width="62"
                  alt="icono"
                /> 
          </button>
        </div>   
      </Swiper>
    </div>
  )
}
