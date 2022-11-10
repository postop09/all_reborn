import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <section>
      <HiddenTitle>배너</HiddenTitle>
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
          <SlideImg src="" alt="광고를 신청해주세요!" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg src="" alt="광고를 신청해주세요!" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg src="" alt="광고를 신청해주세요!" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;

const SlideImg = styled.img`
  min-height: 210px;
`;

const HiddenTitle = styled.h2`
  ${({ theme }) => theme.TEXT.hide};
`;
