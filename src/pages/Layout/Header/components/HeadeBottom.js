import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../header.scss";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HeaderBottom = () => {
  return (
    <div className="headerBottom">
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper headerBottom__carousel"
        >
          <SwiperSlide>HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</SwiperSlide>
          <SwiperSlide>BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</SwiperSlide>
          <SwiperSlide>BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</SwiperSlide>
          <SwiperSlide>FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</SwiperSlide>
          <SwiperSlide>HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</SwiperSlide>
          <SwiperSlide>BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</SwiperSlide>
          <SwiperSlide>BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default HeaderBottom;
