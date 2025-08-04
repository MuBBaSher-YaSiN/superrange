
"use client";
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const ClientsHomeOne = () => {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
    <div className="container">
      <h4 className="title text-center" style={{marginBottom: '30px'}}>Trusted Client</h4> 
        <Swiper 
            loop={true}
            speed={1000}
            autoplay={{ delay: 3000 }}
            slidesPerView="auto"
            pagination={{ clickable: true }} 
            modules={[ Autoplay]}
        className="ak-slider ak-trusted-client-slider">
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_4.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_5.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_6.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_7.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_4.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_5.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_6.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="trusted-client">
                        <img src="assets/img/trusted-client_7.png" alt="" />
                    </div>
                </SwiperSlide> 
        </Swiper>
    </div>
    </>
  );
};

export default ClientsHomeOne;