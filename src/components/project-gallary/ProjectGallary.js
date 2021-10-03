import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import carousel2 from '../../assets/stock/carousel2.png';
import carousel3 from '../../assets/stock/carousel3.png';
import carousel4 from '../../assets/stock/carousel4.png';
import carousel5 from '../../assets/stock/carousel5.png';
import carousel6 from '../../assets/stock/carousel6.png';
import carousel7 from '../../assets/stock/carousel7.png';
import carousel8 from '../../assets/stock/carousel8.png';
import carousel9 from '../../assets/stock/carousel9.png';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


function ProjectGallary() {
  return (
    <Swiper slidesPerView={1.5} spaceBetween={30} pagination={{
        "clickable": true
      }} className="mySwiper" navigation={true}>
      <SwiperSlide className="carousel_items"> <img src={carousel2} alt="" /> </SwiperSlide>
      <SwiperSlide className="carousel_items"> <img src={carousel3} alt="" /> </SwiperSlide>
      <SwiperSlide className="carousel_items"> <img src={carousel4} alt="" /> </SwiperSlide>
      <SwiperSlide className="carousel_items"> <img src={carousel5} alt="" /> </SwiperSlide>
      <SwiperSlide className="carousel_items"> <img src={carousel6} alt="" /> </SwiperSlide>
      <SwiperSlide className="carousel_items"> <img src={carousel7} alt="" /> </SwiperSlide>
      <SwiperSlide className="carousel_items"> <img src={carousel8} alt="" /> </SwiperSlide>
      <SwiperSlide className="carousel_items"> <img src={carousel9} alt="" /> </SwiperSlide>
    </Swiper>
  );
}

export default ProjectGallary;
