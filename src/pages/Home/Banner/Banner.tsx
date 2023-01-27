import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import * as S from "./Banner.style";

const Banner = () => {
  return (
    <section>
      <S.HiddenTitle>배너</S.HiddenTitle>
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        pagination={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <S.SlideImg src="" alt="1번 슬라이드 😡" />
        </SwiperSlide>
        <SwiperSlide>
          <S.SlideImg src="" alt="2번 슬라이드 🤢" />
        </SwiperSlide>
        <SwiperSlide>
          <S.SlideImg src="" alt="3번 슬라이드 🥶" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
