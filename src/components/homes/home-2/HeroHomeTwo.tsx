"use client";
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroHomeTwo = () => {
  return (
    <>
       <Swiper 
        loop={true}
        speed={1200}
        parallax={true}
        zoom={{
          maxRatio: 5,
        }}
        watchSlidesProgress={true}
        className="ak-slider ak-slider-hero-two-1"> 
          <SwiperSlide className="swiper-slide">
              <div className="ak-hero ak-style1 slide-inner style-two">
                  <img src="assets/img/hero_two_slider_bg_1.png" className="ak-hero-bg ak-bg object-cover" alt="..." />
                  <div className="container">
                      <div className="hero-slider-info style-two">
                          <div className="slider-info">
                              <div className="hero-title">
                                  <h1 className="hero-main-title" data-swiper-parallax="300">Car Repair &
                                      Auto</h1>
                                  <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">
                                      Services</h1>
                                  <p className="mini-title" data-swiper-parallax="200">Our skilled team of certified
                                      technicians is here to provide top-notch car repair and auto services to ensure
                                      your vehicle performs at its best. Our skilled team of certified technicians.
                                  </p>
                              </div>
                              <div className="ak-height-45 ak-height-lg-30"></div>
                              <div data-swiper-parallax="300">
                                  <Link href="/appointment" className="common-btn">
                                      APPOINTMENT
                                  </Link>
                              </div>

                              <div className="social-hero-two">
                                  <h6 className="social-link">FOLLOW US</h6>
                                  <div className="social-horizontal"></div>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17"
                                          viewBox="0 0 16 17" fill="none">
                                          <g clipPath="url(#clip0_1730_636)">
                                              <path
                                                  d="M9.24482 16.3712V9.07334H11.6934L12.0608 6.2284H9.24482V4.41233C9.24482 3.58891 9.47253 3.02777 10.6546 3.02777L12.1599 3.02715V0.482539C11.8996 0.448711 11.006 0.371155 9.96603 0.371155C7.79435 0.371155 6.30758 1.69673 6.30758 4.13057V6.2284H3.85156V9.07334H6.30758V16.3712H9.24482Z"
                                                  fill="white" />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_1730_636">
                                                  <rect width="16" height="16" fill="white"
                                                      transform="translate(0.00585938 0.371155)" />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </a>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17"
                                          viewBox="0 0 16 17" fill="none">
                                          <g clipPath="url(#clip0_1730_638)">
                                              <path
                                                  d="M16.0017 16.3712L16.0057 16.3705V10.5025C16.0057 7.63183 15.3877 5.4205 12.0317 5.4205C10.4184 5.4205 9.33571 6.30584 8.89371 7.14517H8.84704V5.6885H5.66504V16.3705H8.97837V11.0812C8.97837 9.6885 9.24237 8.34184 10.967 8.34184C12.6664 8.34184 12.6917 9.93117 12.6917 11.1705V16.3712H16.0017Z"
                                                  fill="white" />
                                              <path d="M0.27002 5.68915H3.58735V16.3711H0.27002V5.68915Z"
                                                  fill="white" />
                                              <path
                                                  d="M1.92719 0.371155C0.866526 0.371155 0.00585938 1.23182 0.00585938 2.29249C0.00585938 3.35316 0.866526 4.23182 1.92719 4.23182C2.98786 4.23182 3.84853 3.35316 3.84853 2.29249C3.84786 1.23182 2.98719 0.371155 1.92719 0.371155Z"
                                                  fill="white" />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_1730_638">
                                                  <rect width="16" height="16" fill="white"
                                                      transform="translate(0.00585938 0.371155)" />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </a>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                          viewBox="0 0 20 21" fill="none">
                                          <path
                                              d="M11.4952 9.14606L17.3234 2.37115H15.9423L10.8816 8.25371L6.83966 2.37115L2.17773 2.37115L8.28998 11.2666L2.17773 18.3712H3.55893L8.90316 12.159L13.1718 18.3712H17.8337L11.4948 9.14606H11.4952ZM9.60342 11.345L8.98412 10.4592L4.05659 3.41089L6.17803 3.41089L10.1546 9.09911L10.7739 9.9849L15.943 17.3787H13.8215L9.60342 11.3453V11.345Z"
                                              fill="white" />
                                      </svg>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
              <div className="ak-hero ak-style1 slide-inner style-two">
                  <img src="assets/img/hero_two_slider_bg_2.png" className="ak-hero-bg ak-bg object-cover" alt="..." />
                  <div className="container">
                      <div className="hero-slider-info style-two">
                          <div className="slider-info">
                              <div className="hero-title">
                                  <h1 className="hero-main-title " data-swiper-parallax="300">AUTOMOTIVE REPAIR</h1>
                                  <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">MAINTENANCE</h1>
                                  <p className="mini-title" data-swiper-parallax="200">Our skilled team of certified
                                      technicians is here to provide
                                      top-notch car repair and auto services to ensure your vehicle performs at its
                                      best. Our skilled team of certified technicians.</p>
                              </div>
                              <div className="ak-height-45 ak-height-lg-30"></div>
                              <div data-swiper-parallax="300">
                                  <Link href="/appointment" className="common-btn">
                                      APPOINTMENT
                                  </Link>
                              </div>
                              <div className="social-hero-two">
                                  <h6 className="social-link">FOLLOW US</h6>
                                  <div className="social-horizontal"></div>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17"
                                          viewBox="0 0 16 17" fill="none">
                                          <g clipPath="url(#clip0_1730_636)">
                                              <path
                                                  d="M9.24482 16.3712V9.07334H11.6934L12.0608 6.2284H9.24482V4.41233C9.24482 3.58891 9.47253 3.02777 10.6546 3.02777L12.1599 3.02715V0.482539C11.8996 0.448711 11.006 0.371155 9.96603 0.371155C7.79435 0.371155 6.30758 1.69673 6.30758 4.13057V6.2284H3.85156V9.07334H6.30758V16.3712H9.24482Z"
                                                  fill="white" />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_1730_636">
                                                  <rect width="16" height="16" fill="white"
                                                      transform="translate(0.00585938 0.371155)" />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </a>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17"
                                          viewBox="0 0 16 17" fill="none">
                                          <g clipPath="url(#clip0_1730_638)">
                                              <path
                                                  d="M16.0017 16.3712L16.0057 16.3705V10.5025C16.0057 7.63183 15.3877 5.4205 12.0317 5.4205C10.4184 5.4205 9.33571 6.30584 8.89371 7.14517H8.84704V5.6885H5.66504V16.3705H8.97837V11.0812C8.97837 9.6885 9.24237 8.34184 10.967 8.34184C12.6664 8.34184 12.6917 9.93117 12.6917 11.1705V16.3712H16.0017Z"
                                                  fill="white" />
                                              <path d="M0.27002 5.68915H3.58735V16.3711H0.27002V5.68915Z"
                                                  fill="white" />
                                              <path
                                                  d="M1.92719 0.371155C0.866526 0.371155 0.00585938 1.23182 0.00585938 2.29249C0.00585938 3.35316 0.866526 4.23182 1.92719 4.23182C2.98786 4.23182 3.84853 3.35316 3.84853 2.29249C3.84786 1.23182 2.98719 0.371155 1.92719 0.371155Z"
                                                  fill="white" />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_1730_638">
                                                  <rect width="16" height="16" fill="white"
                                                      transform="translate(0.00585938 0.371155)" />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </a>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                          viewBox="0 0 20 21" fill="none">
                                          <path
                                              d="M11.4952 9.14606L17.3234 2.37115H15.9423L10.8816 8.25371L6.83966 2.37115L2.17773 2.37115L8.28998 11.2666L2.17773 18.3712H3.55893L8.90316 12.159L13.1718 18.3712H17.8337L11.4948 9.14606H11.4952ZM9.60342 11.345L8.98412 10.4592L4.05659 3.41089L6.17803 3.41089L10.1546 9.09911L10.7739 9.9849L15.943 17.3787H13.8215L9.60342 11.3453V11.345Z"
                                              fill="white" />
                                      </svg>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
              <div className="ak-hero ak-style1  slide-inner style-two">
                  <img src="assets/img/hero_two_slider_bg_1.png" className="ak-hero-bg ak-bg object-cover" alt="..." />
                  <div className="container">
                      <div className="hero-slider-info style-two">
                          <div className="slider-info">
                              <div className="hero-title">
                                  <h1 className="hero-main-title" data-swiper-parallax="300">Car Repair & Auto</h1>
                                  <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">Services</h1>
                                  <p className="mini-title" data-swiper-parallax="200">Our skilled team of certified
                                      technicians is here to provide
                                      top-notch car repair and auto services to ensure your vehicle performs at its
                                      best. Our skilled team of certified technicians.</p>
                              </div>
                              <div className="ak-height-45 ak-height-lg-30"></div>
                              <div data-swiper-parallax="300">
                                  <Link href="/appointment" className="common-btn">
                                      APPOINTMENT
                                  </Link>
                              </div>
                              <div className="social-hero-two">
                                  <h6 className="social-link">FOLLOW US</h6>
                                  <div className="social-horizontal"></div>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17"
                                          viewBox="0 0 16 17" fill="none">
                                          <g clipPath="url(#clip0_1730_636)">
                                              <path
                                                  d="M9.24482 16.3712V9.07334H11.6934L12.0608 6.2284H9.24482V4.41233C9.24482 3.58891 9.47253 3.02777 10.6546 3.02777L12.1599 3.02715V0.482539C11.8996 0.448711 11.006 0.371155 9.96603 0.371155C7.79435 0.371155 6.30758 1.69673 6.30758 4.13057V6.2284H3.85156V9.07334H6.30758V16.3712H9.24482Z"
                                                  fill="white" />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_1730_636">
                                                  <rect width="16" height="16" fill="white"
                                                      transform="translate(0.00585938 0.371155)" />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </a>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17"
                                          viewBox="0 0 16 17" fill="none">
                                          <g clipPath="url(#clip0_1730_638)">
                                              <path
                                                  d="M16.0017 16.3712L16.0057 16.3705V10.5025C16.0057 7.63183 15.3877 5.4205 12.0317 5.4205C10.4184 5.4205 9.33571 6.30584 8.89371 7.14517H8.84704V5.6885H5.66504V16.3705H8.97837V11.0812C8.97837 9.6885 9.24237 8.34184 10.967 8.34184C12.6664 8.34184 12.6917 9.93117 12.6917 11.1705V16.3712H16.0017Z"
                                                  fill="white" />
                                              <path d="M0.27002 5.68915H3.58735V16.3711H0.27002V5.68915Z"
                                                  fill="white" />
                                              <path
                                                  d="M1.92719 0.371155C0.866526 0.371155 0.00585938 1.23182 0.00585938 2.29249C0.00585938 3.35316 0.866526 4.23182 1.92719 4.23182C2.98786 4.23182 3.84853 3.35316 3.84853 2.29249C3.84786 1.23182 2.98719 0.371155 1.92719 0.371155Z"
                                                  fill="white" />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_1730_638">
                                                  <rect width="16" height="16" fill="white"
                                                      transform="translate(0.00585938 0.371155)" />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </a>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                          viewBox="0 0 20 21" fill="none">
                                          <path
                                              d="M11.4952 9.14606L17.3234 2.37115H15.9423L10.8816 8.25371L6.83966 2.37115L2.17773 2.37115L8.28998 11.2666L2.17773 18.3712H3.55893L8.90316 12.159L13.1718 18.3712H17.8337L11.4948 9.14606H11.4952ZM9.60342 11.345L8.98412 10.4592L4.05659 3.41089L6.17803 3.41089L10.1546 9.09911L10.7739 9.9849L15.943 17.3787H13.8215L9.60342 11.3453V11.345Z"
                                              fill="white" />
                                      </svg>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
              <div className="ak-hero ak-style1 slide-inner style-two">
                  <img src="assets/img/hero_two_slider_bg_2.png" className="ak-hero-bg ak-bg object-cover" alt="..." />
                  <div className="container">
                      <div className="hero-slider-info style-two">
                          <div className="slider-info">
                              <div className="hero-title">
                                  <h1 className="hero-main-title " data-swiper-parallax="300">AUTOMOTIVE REPAIR</h1>
                                  <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">MAINTENANCE</h1>
                                  <p className="mini-title" data-swiper-parallax="200">Our skilled team of certified
                                      technicians is here to provide
                                      top-notch car repair and auto services to ensure your vehicle performs at its
                                      best. Our skilled team of certified technicians.</p>
                              </div>
                              <div className="ak-height-45 ak-height-lg-30"></div>
                              <div data-swiper-parallax="300">
                                  <Link href="/appointment" className="common-btn">
                                      APPOINTMENT
                                  </Link>
                              </div>
                              <div className="social-hero-two">
                                  <h6 className="social-link">FOLLOW US</h6>
                                  <div className="social-horizontal"></div>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17"
                                          viewBox="0 0 16 17" fill="none">
                                          <g clipPath="url(#clip0_1730_636)">
                                              <path
                                                  d="M9.24482 16.3712V9.07334H11.6934L12.0608 6.2284H9.24482V4.41233C9.24482 3.58891 9.47253 3.02777 10.6546 3.02777L12.1599 3.02715V0.482539C11.8996 0.448711 11.006 0.371155 9.96603 0.371155C7.79435 0.371155 6.30758 1.69673 6.30758 4.13057V6.2284H3.85156V9.07334H6.30758V16.3712H9.24482Z"
                                                  fill="white" />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_1730_636">
                                                  <rect width="16" height="16" fill="white"
                                                      transform="translate(0.00585938 0.371155)" />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </a>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17"
                                          viewBox="0 0 16 17" fill="none">
                                          <g clipPath="url(#clip0_1730_638)">
                                              <path
                                                  d="M16.0017 16.3712L16.0057 16.3705V10.5025C16.0057 7.63183 15.3877 5.4205 12.0317 5.4205C10.4184 5.4205 9.33571 6.30584 8.89371 7.14517H8.84704V5.6885H5.66504V16.3705H8.97837V11.0812C8.97837 9.6885 9.24237 8.34184 10.967 8.34184C12.6664 8.34184 12.6917 9.93117 12.6917 11.1705V16.3712H16.0017Z"
                                                  fill="white" />
                                              <path d="M0.27002 5.68915H3.58735V16.3711H0.27002V5.68915Z"
                                                  fill="white" />
                                              <path
                                                  d="M1.92719 0.371155C0.866526 0.371155 0.00585938 1.23182 0.00585938 2.29249C0.00585938 3.35316 0.866526 4.23182 1.92719 4.23182C2.98786 4.23182 3.84853 3.35316 3.84853 2.29249C3.84786 1.23182 2.98719 0.371155 1.92719 0.371155Z"
                                                  fill="white" />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_1730_638">
                                                  <rect width="16" height="16" fill="white"
                                                      transform="translate(0.00585938 0.371155)" />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </a>
                                  <a href="#" className="social-icon1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                          viewBox="0 0 20 21" fill="none">
                                          <path
                                              d="M11.4952 9.14606L17.3234 2.37115H15.9423L10.8816 8.25371L6.83966 2.37115L2.17773 2.37115L8.28998 11.2666L2.17773 18.3712H3.55893L8.90316 12.159L13.1718 18.3712H17.8337L11.4948 9.14606H11.4952ZM9.60342 11.345L8.98412 10.4592L4.05659 3.41089L6.17803 3.41089L10.1546 9.09911L10.7739 9.9849L15.943 17.3787H13.8215L9.60342 11.3453V11.345Z"
                                              fill="white" />
                                      </svg>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </SwiperSlide> 
      </Swiper>
    </>
  );
};

export default HeroHomeTwo;