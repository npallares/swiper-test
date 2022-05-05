import React,{useRef} from 'react'

import { Navigation, Pagination, Lazy, Keyboard, Autoplay} from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Slice } from './Slice';


const times = (number) => (mapper) => Array(number).fill(0).map(mapper);

export const Carousel = () => {

  const swiper = useSwiper();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

    
  return (
    <div className='flex w-full h-[350px]'>
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
            modifierClass:'w-full relative bottom-5 left-0 flex justify-center items-center h-[30px]',
            bulletClass: 'h-2 w-2 ml-4 bg-gray-800 rounded-full z-50',
            bulletActiveClass:'bg-emerald-500 transition delay-100 ease-in-out opacity-100',
          }}
          autoplay={{
            delay:3000,
            disableOnInteraction:false,	
            pauseOnMouseEnter:true,
          }}
          keyboard={{enabled: true}}
      >
        {times(10)((_el,index)=><SwiperSlide key={index}><Slice index={index}/></SwiperSlide> )}
        
        <div className='flex flex-row w-full absolute top-[130px] left-0 z-50 px-[10px]'>
          <button ref={prevRef} className="cursor-pointer w-62 h-62  " onClick={() => swiper.slideNext()} >
                <img
                  src="arrowLeft.png"
                  height="62"
                  width="62"
                  alt="icono"
                /> 
          </button>
          <div className='grow'></div>
          <button ref={nextRef} className="cursor-pointer w-[72px] h-62" onClick={() => swiper.slidePrev()} >
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
