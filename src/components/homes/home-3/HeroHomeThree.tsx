"use client"
import Link from 'next/link';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 
const HeroHomeThree = () => {
  return (
    <>
      <Swiper 
      loop={true}
      speed={1200}
      parallax={true}
      zoom={{ maxRatio: 5 }}
      watchSlidesProgress={true}
      navigation={{ nextEl: ".ak-swiper-button-prev.slider-three", prevEl: ".ak-swiper-button-next.slider-three" }}
      modules={[Navigation]}
      className="ak-slider ak-slider-hero-three"> 
            <SwiperSlide className="swiper-slide">
                <div className="ak-hero ak-style1 slide-inner style-three">
                    <video autoPlay muted loop playsInline className="ak-hero-bg ak-bg object-cover">
                        <source src="assets/video/hero-bg-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="hero-slider-info style-three">
                        <div className="slider-info">
                            <div className="hero-title">
                                <h1 className="hero-main-title" data-swiper-parallax="300">
                                    Car Workshop & Wheel
                                </h1>
                                <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">
                                    Services
                                </h1>
                                <p className="mini-title" data-swiper-parallax="200">
                                    Our skilled team of certified technicians is here to provide
                                    top-notch car repair and auto services to ensure your
                                    vehicle performs at its best. Our skilled team of certified
                                    technicians.
                                </p>
                            </div>
                            <div className="ak-height-45 ak-height-lg-30"></div>
                            <div data-swiper-parallax="300">
                                <Link href="/appointment" className="common-btn">VIEW MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="ak-hero ak-style1 slide-inner style-three">
                    <video autoPlay muted loop playsInline className="ak-hero-bg ak-bg object-cover">
                        <source src="assets/video/hero-bg-video-2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="hero-slider-info style-three">
                        <div className="slider-info">
                            <div className="hero-title">
                                <h1 className="hero-main-title" data-swiper-parallax="300">
                                    Car Workshop & Wheel
                                </h1>
                                <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">
                                    Services
                                </h1>
                                <p className="mini-title" data-swiper-parallax="200">
                                    Our skilled team of certified technicians is here to provide
                                    top-notch car repair and auto services to ensure your
                                    vehicle performs at its best. Our skilled team of certified
                                    technicians.
                                </p>
                            </div>
                            <div className="ak-height-45 ak-height-lg-30"></div>
                            <div data-swiper-parallax="300">
                                <Link href="/appointment" className="common-btn">VIEW MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide> 
            <SwiperSlide className="swiper-slide">
                <div className="ak-hero ak-style1 slide-inner style-three">
                    <video autoPlay muted loop playsInline className="ak-hero-bg ak-bg object-cover">
                        <source src="assets/video/hero-bg-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="hero-slider-info style-three">
                        <div className="slider-info">
                            <div className="hero-title">
                                <h1 className="hero-main-title" data-swiper-parallax="300">
                                    Car Workshop & Wheel
                                </h1>
                                <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">
                                    Services
                                </h1>
                                <p className="mini-title" data-swiper-parallax="200">
                                    Our skilled team of certified technicians is here to provide
                                    top-notch car repair and auto services to ensure your
                                    vehicle performs at its best. Our skilled team of certified
                                    technicians.
                                </p>
                            </div>
                            <div className="ak-height-45 ak-height-lg-30"></div>
                            <div data-swiper-parallax="300">
                                <Link href="/appointment" className="common-btn">VIEW MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="ak-hero ak-style1 slide-inner style-three">
                    <video autoPlay muted loop playsInline className="ak-hero-bg ak-bg object-cover">
                        <source src="assets/video/hero-bg-video-2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="hero-slider-info style-three">
                        <div className="slider-info">
                            <div className="hero-title">
                                <h1 className="hero-main-title" data-swiper-parallax="300">
                                    Car Workshop & Wheel
                                </h1>
                                <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">
                                    Services
                                </h1>
                                <p className="mini-title" data-swiper-parallax="200">
                                    Our skilled team of certified technicians is here to provide
                                    top-notch car repair and auto services to ensure your
                                    vehicle performs at its best. Our skilled team of certified
                                    technicians.
                                </p>
                            </div>
                            <div className="ak-height-45 ak-height-lg-30"></div>
                            <div data-swiper-parallax="300">
                                <Link href="/appointment" className="common-btn">VIEW MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide> 
        <div className="ak-swiper-controll-hero-3">
            <div className="ak-swiper-navigation-wrap">
                <div className="ak-swiper-button-prev slider-three">
                    <div className="hero-swiper-prev">
                        <div className="btn-cricle ak-white-bg-1"></div>
                        <div className="btn-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="41" viewBox="0 0 29 41"
                                fill="none">
                                <path
                                    d="M1.82581 20.0839L7.72307 14.1866C7.93491 13.9392 8.3072 13.9104 8.55457 14.1223C8.80194 14.3341 8.83078 14.7064 8.61889 14.9538C8.59912 14.9769 8.57763 14.9984 8.55457 15.0181L3.66574 19.9129H20.0831C20.4088 19.9129 20.6729 20.1769 20.6729 20.5026C20.6729 20.8284 20.4088 21.0924 20.0831 21.0924H3.66574L8.55457 25.9812C8.80194 26.193 8.83078 26.5653 8.61889 26.8127C8.40699 27.0601 8.03475 27.0889 7.78738 26.877C7.76432 26.8572 7.74278 26.8358 7.72307 26.8127L1.82575 20.9154C1.59714 20.6854 1.59714 20.314 1.82581 20.0839Z"
                                    fill="#fff" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="ak-swiper-button-next slider-three">
                    <div className="hero-swiper-next">
                        <div className="btn-cricle ak-white-bg-1"></div>
                        <div className="btn-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="41" viewBox="0 0 29 41"
                                fill="none">
                                <path
                                    d="M20.5013 20.0839L14.6041 14.1866C14.3922 13.9392 14.0199 13.9104 13.7726 14.1223C13.5252 14.3341 13.4964 14.7064 13.7083 14.9538C13.728 14.9769 13.7495 14.9984 13.7726 15.0181L18.6614 19.9129H2.24401C1.91834 19.9129 1.6543 20.1769 1.6543 20.5026C1.6543 20.8284 1.91834 21.0924 2.24401 21.0924H18.6614L13.7726 25.9812C13.5252 26.193 13.4964 26.5653 13.7083 26.8127C13.9202 27.0601 14.2924 27.0889 14.5398 26.877C14.5628 26.8572 14.5844 26.8358 14.6041 26.8127L20.5014 20.9154C20.73 20.6854 20.73 20.314 20.5013 20.0839Z"
                                    fill="#fff" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="social-hero-two">
                    <h6 className="social-link">FOLLOW US</h6>
                    <div className="social-horizontal"></div>
                    <a href="/" className="social-icon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
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
                    <a href="/" className="social-icon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <g clipPath="url(#clip0_1730_638)">
                                <path
                                    d="M16.0017 16.3712L16.0057 16.3705V10.5025C16.0057 7.63183 15.3877 5.4205 12.0317 5.4205C10.4184 5.4205 9.33571 6.30584 8.89371 7.14517H8.84704V5.6885H5.66504V16.3705H8.97837V11.0812C8.97837 9.6885 9.24237 8.34184 10.967 8.34184C12.6664 8.34184 12.6917 9.93117 12.6917 11.1705V16.3712H16.0017Z"
                                    fill="white" />
                                <path d="M0.27002 5.68915H3.58735V16.3711H0.27002V5.68915Z" fill="white" />
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
                    <a href="/" className="social-icon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path
                                d="M11.4952 9.14606L17.3234 2.37115H15.9423L10.8816 8.25371L6.83966 2.37115L2.17773 2.37115L8.28998 11.2666L2.17773 18.3712H3.55893L8.90316 12.159L13.1718 18.3712H17.8337L11.4948 9.14606H11.4952ZM9.60342 11.345L8.98412 10.4592L4.05659 3.41089L6.17803 3.41089L10.1546 9.09911L10.7739 9.9849L15.943 17.3787H13.8215L9.60342 11.3453V11.345Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </Swiper>
    </>
  );
};

export default HeroHomeThree;