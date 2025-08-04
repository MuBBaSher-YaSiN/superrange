"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper/modules';

 

const SingleTeamSlider = () => {
  return (
    <>
       <div className="ak-height-125 ak-height-lg-80"></div>
      <Swiper 
      loop={true}
      speed={1000}
      autoplay={true}
      slidesPerView="auto"
      effect="coverflow"
      spaceBetween="12%"
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      keyboard={{
        enabled: true,
      }}
      navigation={{
        nextEl: ".button-next",
        prevEl: ".button-prev",
      }}  
      modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectCoverflow]}

      className="team-single-page-slider ak-slider"> 
          <SwiperSlide className="swiper-slide">
              <img className="slide-img" src="assets/img/team_single_page_slider_1.jpg" alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
              <img className="slide-img" src="assets/img/team_single_page_slider_2.jpg" alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
              <img className="slide-img" src="assets/img/team_single_page_slider_3.jpg" alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
              <img className="slide-img" src="assets/img/team_single_page_slider_1.jpg" alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
              <img className="slide-img" src="assets/img/team_single_page_slider_2.jpg" alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
              <img className="slide-img" src="assets/img/team_single_page_slider_3.jpg" alt="..." />
          </SwiperSlide>
          
          <div className="team-single-page-swiper-controll">
              <div className="button-next button-style">
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="41" viewBox="0 0 29 41" fill="none">
                      <path
                          d="M1.82581 20.0839L7.72307 14.1866C7.93491 13.9392 8.3072 13.9104 8.55457 14.1223C8.80194 14.3341 8.83078 14.7064 8.61889 14.9538C8.59912 14.9769 8.57763 14.9984 8.55457 15.0181L3.66574 19.9129H20.0831C20.4088 19.9129 20.6729 20.1769 20.6729 20.5026C20.6729 20.8284 20.4088 21.0924 20.0831 21.0924H3.66574L8.55457 25.9812C8.80194 26.193 8.83078 26.5653 8.61889 26.8127C8.40699 27.0601 8.03475 27.0889 7.78738 26.877C7.76432 26.8572 7.74278 26.8358 7.72307 26.8127L1.82575 20.9154C1.59714 20.6854 1.59714 20.314 1.82581 20.0839Z"
                          fill="#fff" />
                  </svg>
              </div>
              <div className="button-prev button-style">
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="41" viewBox="0 0 29 41" fill="none">
                      <path
                          d="M20.5013 20.0839L14.6041 14.1866C14.3922 13.9392 14.0199 13.9104 13.7726 14.1223C13.5252 14.3341 13.4964 14.7064 13.7083 14.9538C13.728 14.9769 13.7495 14.9984 13.7726 15.0181L18.6614 19.9129H2.24401C1.91834 19.9129 1.6543 20.1769 1.6543 20.5026C1.6543 20.8284 1.91834 21.0924 2.24401 21.0924H18.6614L13.7726 25.9812C13.5252 26.193 13.4964 26.5653 13.7083 26.8127C13.9202 27.0601 14.2924 27.0889 14.5398 26.877C14.5628 26.8572 14.5844 26.8358 14.6041 26.8127L20.5014 20.9154C20.73 20.6854 20.73 20.314 20.5013 20.0839Z"
                          fill="#fff" />
                  </svg>
              </div>
          </div>
      </Swiper>
    </>
  );
};

export default SingleTeamSlider;