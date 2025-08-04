"use client"

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Parallax, Zoom } from 'swiper/modules';


const HeroHomeOne = () => {
    return (
        <>
            <Swiper
                loop={true}
                speed={1200}
                parallax={true}
                zoom={{
                    maxRatio: 5,
                }}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                watchSlidesProgress={true}
                slidesPerView={"auto"}
                pagination={{
                    el: ".hero-swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<p class="' + className + '">' + (index + 1) + "</p>";
                    },
                }}
                navigation={{
                    nextEl: ".ak-swiper-button-prev",
                    prevEl: ".ak-swiper-button-next",
                }}
                modules={[Navigation, Pagination, Autoplay, Zoom, Parallax]}
                className="ak-slider ak-slider-hero-1">

                <SwiperSlide className="swiper-slide">
                    <div className="ak-hero ak-style1 slide-inner">
                        <img src="assets/img/Hero/Hero1.webp" className="ak-hero-bg ak-bg object-cover" alt="..." />
                        <div className="container">
                            <div className="hero-slider-info">
                                <div className="slider-info">
                                    <div className="hero-title">
                                        <h1 className="hero-main-title" data-swiper-parallax="300">Car Repair &
                                            Auto</h1>
                                        <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">
                                            Services</h1>
                                        <p className="mini-title" data-swiper-parallax="400">Our skilled team of certified
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
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="ak-hero ak-style1 slide-inner">
                        <img src="https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg" className="ak-hero-bg ak-bg object-cover" alt="..." />
                        <div className="container">
                            <div className="hero-slider-info">
                                <div className="slider-info">
                                    <div className="hero-title">
                                        <h1 className="hero-main-title " data-swiper-parallax="300">AUTOMOTIVE REPAIR</h1>
                                        <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">MAINTENANCE</h1>
                                        <p className="mini-title" data-swiper-parallax="400">Our skilled team of certified
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
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="ak-hero ak-style1  slide-inner">
                        <img src="assets/img/Hero/Hero3.webp" className="ak-hero-bg ak-bg object-cover" alt="..." />
                        <div className="container">
                            <div className="hero-slider-info">
                                <div className="slider-info">
                                    <div className="hero-title">
                                        <h1 className="hero-main-title" data-swiper-parallax="300">Car Repair & Auto</h1>
                                        <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">Services</h1>
                                        <p className="mini-title" data-swiper-parallax="400">Our skilled team of certified
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
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="ak-hero ak-style1 slide-inner">
                        <img src="assets/img/Hero/Hero4.jpg" className="ak-hero-bg ak-bg object-cover" alt="..." />
                        <div className="container">
                            <div className="hero-slider-info">
                                <div className="slider-info">
                                    <div className="hero-title">
                                        <h1 className="hero-main-title " data-swiper-parallax="300">AUTOMOTIVE REPAIR</h1>
                                        <h1 className="hero-main-title-1 style-2" data-swiper-parallax="100">MAINTENANCE</h1>
                                        <p className="mini-title" data-swiper-parallax="400">Our skilled team of certified
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
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="ak-swiper-controll-hero-1">
                    <div className="ak-swiper-navigation-wrap">
                        <div className="ak-swiper-button-prev">
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
                        <div className="ak-swiper-button-next">
                            <div className="hero-swiper-next">
                                <div className="btn-cricle ak-white-bg-1"></div>
                                <div className="btn-arrow ">
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
                </div>
                <div className="container">
                    <div className="hero-contact-info">
                        <a href="tel:(406)555-0120">
                            <div className="d-flex align-items-center gap-2">
                                <div className="heartbeat-icon">
                                    <svg width="61" height="60" viewBox="0 0 61 60" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                            <circle opacity="0.3" cx="30.5" cy="30" r="25" fill="#FF3D24" />
                                            <circle opacity="0.3" cx="30.5" cy="30" r="30" fill="#FF3D24" />
                                            <circle cx="30.5" cy="30" r="20" fill="#FF3D24" />
                                        </g>
                                        <g clipPath="url(#clip0_52_92)">
                                            <path
                                                d="M39.2141 38.8572C39.6637 38.8572 40.0533 38.7087 40.3844 38.4156L34.7181 32.7491C34.5821 32.8464 34.4504 32.9411 34.3259 33.0311C33.9019 33.3435 33.5577 33.5873 33.2934 33.762C33.0292 33.9371 32.6776 34.1156 32.2388 34.2978C31.7996 34.4802 31.3905 34.5711 31.011 34.5711H30.9999H30.9888C30.6092 34.5711 30.2001 34.4803 29.761 34.2978C29.3219 34.1156 28.9703 33.9371 28.7063 33.762C28.4421 33.5873 28.0981 33.3436 27.6738 33.0311C27.5556 32.9444 27.4245 32.8493 27.2827 32.7476L21.6153 38.4156C21.9465 38.7087 22.3363 38.8572 22.7858 38.8572H39.2141Z"
                                                fill="white" />
                                            <path
                                                d="M22.1274 29.1809C21.7033 28.8982 21.3273 28.5744 21 28.2097V36.8309L25.9943 31.8367C24.9951 31.1391 23.7078 30.2549 22.1274 29.1809Z"
                                                fill="white" />
                                            <path
                                                d="M39.8839 29.1809C38.3638 30.2098 37.0718 31.0955 36.0077 31.8386L41 36.8311V28.2097C40.6799 28.5671 40.308 28.8906 39.8839 29.1809Z"
                                                fill="white" />
                                            <path
                                                d="M39.2141 23.1428H22.7858C22.2127 23.1428 21.772 23.3364 21.4634 23.723C21.1544 24.1099 21.0002 24.5937 21.0002 25.1739C21.0002 25.6426 21.2049 26.1504 21.614 26.6975C22.0231 27.2444 22.4584 27.6739 22.9198 27.9864C23.1727 28.1651 23.9354 28.6953 25.2078 29.5769C25.8947 30.0529 26.4921 30.4678 27.0054 30.8258C27.4429 31.1307 27.8203 31.3947 28.1318 31.6138C28.1676 31.6389 28.2238 31.6791 28.2985 31.7325C28.3789 31.7902 28.4807 31.8636 28.6063 31.9542C28.8481 32.1291 29.0489 32.2705 29.2089 32.3785C29.3687 32.4865 29.5623 32.6071 29.7894 32.7411C30.0163 32.8749 30.2303 32.9756 30.4312 33.0425C30.6321 33.1094 30.8181 33.1429 30.9892 33.1429H31.0003H31.0114C31.1824 33.1429 31.3685 33.1094 31.5694 33.0425C31.7702 32.9756 31.9841 32.8752 32.2112 32.7411C32.438 32.6071 32.6314 32.4862 32.7916 32.3785C32.9516 32.2705 33.1525 32.1291 33.3943 31.9542C33.5196 31.8636 33.6214 31.7902 33.7019 31.7327C33.7765 31.6791 33.8328 31.6391 33.8687 31.6138C34.1114 31.4449 34.4897 31.182 34.9982 30.8289C35.9234 30.186 37.2861 29.2398 39.092 27.9864C39.6351 27.6071 40.0888 27.1493 40.4535 26.6137C40.8175 26.0782 41 25.5164 41 24.9286C41 24.4375 40.8231 24.0173 40.4699 23.6673C40.1164 23.3177 39.6978 23.1428 39.2141 23.1428Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_52_92">
                                                <rect width="20" height="20" fill="white" transform="translate(20.5 21)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="ak-font-18 ak-white-color ak-semi-bold">example@email.com</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="d-flex align-items-center gap-2">
                                <div className="heartbeat-icon">
                                    <svg width="61" height="60" viewBox="0 0 61 60" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                            <circle opacity="0.3" cx="30.5" cy="30" r="25" fill="#FF3D24" />
                                            <circle opacity="0.3" cx="30.5" cy="30" r="30" fill="#FF3D24" />
                                            <circle cx="30.5" cy="30" r="20" fill="#FF3D24" />
                                        </g>
                                        <path
                                            d="M30.5 21C26.9857 21 24.0547 23.8309 24.0547 27.4453C24.0547 28.8204 24.4679 30.0466 25.2609 31.1955L30.0068 38.601C30.237 38.961 30.7635 38.9603 30.9932 38.601L35.7597 31.1704C36.5356 30.0734 36.9453 28.7854 36.9453 27.4453C36.9453 23.8914 34.0539 21 30.5 21ZM30.5 30.375C28.8846 30.375 27.5703 29.0607 27.5703 27.4453C27.5703 25.83 28.8846 24.5156 30.5 24.5156C32.1154 24.5156 33.4297 25.83 33.4297 27.4453C33.4297 29.0607 32.1154 30.375 30.5 30.375Z"
                                            fill="white" />
                                        <path
                                            d="M35.0806 34.4646L32.1302 39.0774C31.3665 40.2681 29.6293 40.2642 28.8692 39.0786L25.914 34.4659C23.3138 35.067 21.7109 36.1683 21.7109 37.4844C21.7109 39.768 26.2394 41 30.5 41C34.7606 41 39.2891 39.768 39.2891 37.4844C39.2891 36.1674 37.6839 35.0655 35.0806 34.4646Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <p className="ak-font-18 ak-white-color ak-semi-bold">123 Maple Street Toronto, On, Canada</p>
                            </div>
                        </a>
                        <div className="d-flex align-items-center gap-2">
                            <div className="heartbeat-icon">
                                <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <circle opacity="0.3" cx="30.5" cy="30" r="25" fill="#FF3D24" />
                                        <circle opacity="0.3" cx="30.5" cy="30" r="30" fill="#FF3D24" />
                                        <circle cx="30.5" cy="30" r="20" fill="#FF3D24" />
                                    </g>
                                    <g clipPath="url(#clip0_52_110)">
                                        <path
                                            d="M25 22.6667C25.0884 22.6667 25.1732 22.6316 25.2357 22.569C25.2982 22.5065 25.3334 22.4217 25.3334 22.3333V21C25.3334 20.9116 25.2982 20.8268 25.2357 20.7643C25.1732 20.7018 25.0884 20.6667 25 20.6667C24.9116 20.6667 24.8268 20.7018 24.7643 20.7643C24.7018 20.8268 24.6667 20.9116 24.6667 21V22.3333C24.6667 22.4217 24.7018 22.5065 24.7643 22.569C24.8268 22.6316 24.9116 22.6667 25 22.6667Z"
                                            fill="white" />
                                        <path
                                            d="M29 22.6667C29.0884 22.6667 29.1732 22.6316 29.2357 22.569C29.2982 22.5065 29.3334 22.4217 29.3334 22.3333V21C29.3334 20.9116 29.2982 20.8268 29.2357 20.7643C29.1732 20.7018 29.0884 20.6667 29 20.6667C28.9116 20.6667 28.8268 20.7018 28.7643 20.7643C28.7018 20.8268 28.6667 20.9116 28.6667 21V22.3333C28.6667 22.4217 28.7018 22.5065 28.7643 22.569C28.8268 22.6316 28.9116 22.6667 29 22.6667Z"
                                            fill="white" />
                                        <path
                                            d="M37 22.6667C37.0884 22.6667 37.1732 22.6316 37.2357 22.569C37.2982 22.5065 37.3334 22.4217 37.3334 22.3333V21C37.3334 20.9116 37.2982 20.8268 37.2357 20.7643C37.1732 20.7018 37.0884 20.6667 37 20.6667C36.9116 20.6667 36.8268 20.7018 36.7643 20.7643C36.7018 20.8268 36.6667 20.9116 36.6667 21V22.3333C36.6667 22.4217 36.7018 22.5065 36.7643 22.569C36.8268 22.6316 36.9116 22.6667 37 22.6667Z"
                                            fill="white" />
                                        <path
                                            d="M33 22.6667C33.0884 22.6667 33.1732 22.6316 33.2357 22.569C33.2982 22.5065 33.3334 22.4217 33.3334 22.3333V21C33.3334 20.9116 33.2982 20.8268 33.2357 20.7643C33.1732 20.7018 33.0884 20.6667 33 20.6667C32.9116 20.6667 32.8268 20.7018 32.7643 20.7643C32.7018 20.8268 32.6667 20.9116 32.6667 21V22.3333C32.6667 22.4217 32.7018 22.5065 32.7643 22.569C32.8268 22.6316 32.9116 22.6667 33 22.6667Z"
                                            fill="white" />
                                        <path d="M32.3333 29.9503L30.6937 32H32.3333V29.9503Z" fill="white" />
                                        <path
                                            d="M21.6667 37.6667C21.6672 38.1085 21.843 38.5322 22.1554 38.8446C22.4679 39.157 22.8915 39.3328 23.3334 39.3333H38.6667C39.1086 39.3328 39.5322 39.157 39.8446 38.8446C40.1571 38.5322 40.3328 38.1085 40.3334 37.6667V24.6667H21.6667V37.6667ZM34.6667 34V32.3333C34.6667 32.2449 34.7018 32.1601 34.7643 32.0976C34.8268 32.0351 34.9116 32 35 32C35.0884 32 35.1732 32.0351 35.2357 32.0976C35.2982 32.1601 35.3334 32.2449 35.3334 32.3333V33.0613C35.4401 33.0219 35.5529 33.0011 35.6667 33C35.9319 33 36.1863 33.1054 36.3738 33.2929C36.5613 33.4804 36.6667 33.7348 36.6667 34V34.3333C36.6667 34.4217 36.6316 34.5065 36.5691 34.569C36.5065 34.6316 36.4218 34.6667 36.3334 34.6667C36.2449 34.6667 36.1602 34.6316 36.0977 34.569C36.0351 34.5065 36 34.4217 36 34.3333V34C36 33.9116 35.9649 33.8268 35.9024 33.7643C35.8399 33.7018 35.7551 33.6667 35.6667 33.6667C35.5783 33.6667 35.4935 33.7018 35.431 33.7643C35.3685 33.8268 35.3334 33.9116 35.3334 34V34.3333C35.3334 34.4217 35.2982 34.5065 35.2357 34.569C35.1732 34.6316 35.0884 34.6667 35 34.6667C34.9116 34.6667 34.8268 34.6316 34.7643 34.569C34.7018 34.5065 34.6667 34.4217 34.6667 34.3333V34ZM29.7397 32.125L32.4064 28.7917C32.4495 28.7377 32.5084 28.6985 32.5748 28.6794C32.6412 28.6604 32.7119 28.6624 32.7771 28.6853C32.8423 28.7082 32.8987 28.7508 32.9387 28.8071C32.9786 28.8635 33.0001 28.9309 33 29V32H33.6667C33.7551 32 33.8399 32.0351 33.9024 32.0976C33.9649 32.1601 34 32.2449 34 32.3333C34 32.4217 33.9649 32.5065 33.9024 32.569C33.8399 32.6316 33.7551 32.6667 33.6667 32.6667H33V34.3333C33 34.4217 32.9649 34.5065 32.9024 34.569C32.8399 34.6316 32.7551 34.6667 32.6667 34.6667C32.5783 34.6667 32.4935 34.6316 32.431 34.569C32.3685 34.5065 32.3334 34.4217 32.3334 34.3333V32.6667H30C29.9372 32.6667 29.8757 32.649 29.8225 32.6155C29.7693 32.5821 29.7267 32.5343 29.6995 32.4777C29.6723 32.4211 29.6616 32.358 29.6687 32.2956C29.6758 32.2332 29.7004 32.174 29.7397 32.125ZM27.2667 28.6667C27.9354 28.6667 29.2 29.055 29.2 30.5237C29.2 31.9153 27.743 33.25 26.7457 34H29.6667C29.7551 34 29.8399 34.0351 29.9024 34.0976C29.9649 34.1601 30 34.2449 30 34.3333C30 34.4217 29.9649 34.5065 29.9024 34.569C29.8399 34.6316 29.7551 34.6667 29.6667 34.6667H25.6667C25.5937 34.6667 25.5227 34.6427 25.4647 34.5985C25.4066 34.5543 25.3647 34.4922 25.3453 34.4218C25.3259 34.3515 25.3302 34.2767 25.3574 34.209C25.3846 34.1413 25.4333 34.0844 25.496 34.047C26.3407 33.5433 28.5334 31.9283 28.5334 30.5237C28.5334 29.377 27.395 29.3343 27.2667 29.3333C27.1033 29.3203 26.9391 29.3417 26.7845 29.396C26.6299 29.4503 26.4883 29.5364 26.369 29.6487C26.2497 29.761 26.1552 29.8971 26.0917 30.0481C26.0281 30.1992 25.9969 30.3618 26 30.5257C25.9992 30.6136 25.9638 30.6976 25.9013 30.7594C25.8389 30.8213 25.7546 30.856 25.6667 30.856C25.5786 30.8556 25.4942 30.8203 25.4321 30.7578C25.3699 30.6953 25.335 30.6108 25.335 30.5227C25.3299 30.2711 25.377 30.0211 25.4733 29.7886C25.5695 29.5561 25.7129 29.346 25.8944 29.1716C26.0759 28.9973 26.2915 28.8624 26.5277 28.7755C26.7639 28.6886 27.0155 28.6515 27.2667 28.6667Z"
                                            fill="white" />
                                        <path
                                            d="M38.6667 22H38V22.3333C38 22.5985 37.8947 22.8529 37.7071 23.0404C37.5196 23.228 37.2652 23.3333 37 23.3333C36.7348 23.3333 36.4805 23.228 36.2929 23.0404C36.1054 22.8529 36 22.5985 36 22.3333V22H34V22.3333C34 22.5985 33.8947 22.8529 33.7071 23.0404C33.5196 23.228 33.2652 23.3333 33 23.3333C32.7348 23.3333 32.4805 23.228 32.2929 23.0404C32.1054 22.8529 32 22.5985 32 22.3333V22H30V22.3333C30 22.5985 29.8947 22.8529 29.7071 23.0404C29.5196 23.228 29.2652 23.3333 29 23.3333C28.7348 23.3333 28.4805 23.228 28.2929 23.0404C28.1054 22.8529 28 22.5985 28 22.3333V22H26V22.3333C26 22.5985 25.8947 22.8529 25.7071 23.0404C25.5196 23.228 25.2652 23.3333 25 23.3333C24.7348 23.3333 24.4804 23.228 24.2929 23.0404C24.1054 22.8529 24 22.5985 24 22.3333V22H23.3334C22.8915 22.0005 22.4679 22.1763 22.1554 22.4887C21.843 22.8012 21.6672 23.2248 21.6667 23.6667V24H40.3334V23.6667C40.3328 23.2248 40.1571 22.8012 39.8446 22.4887C39.5322 22.1763 39.1086 22.0005 38.6667 22Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_52_110">
                                            <rect width="20" height="20" fill="white" transform="translate(20.5 20)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <p className="ak-font-18 ak-white-color ak-semi-bold">Sun - Thu: Open 27/7</p>
                        </div>
                    </div>
                </div>
                <div className="hero-pagination">
                    <div className="hero-swiper-pagination"></div>
                </div>
                <div className="social-hero">
                    {/* <a href="" className="social-icon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path
                        d="M9.27491 8.83093L2.5 3.00265L2.5 4.38377L8.38256 9.44446L2.5 13.4864L2.5 18.1484L11.3955 12.0361L18.5 18.1484L18.5 16.7672L12.2878 11.4229L18.5 7.15432L18.5 2.49239L9.27491 8.83127L9.27491 8.83093ZM11.4738 10.7227L10.5881 11.342L3.53974 16.2695L3.53974 14.1481L9.22795 10.1715L10.1137 9.55219L17.5075 4.38311L17.5075 6.50455L11.4742 10.7227L11.4738 10.7227Z"
                        fill="white" />
                </svg>
            </a>
            <a href="" className="social-icon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <g clipPath="url(#clip0_64_135)">
                        <path
                            d="M16.5 0.324375L16.4993 0.320374L10.6313 0.320374C7.76068 0.320374 5.54935 0.938375 5.54935 4.29437C5.54935 5.90771 6.43468 6.99037 7.27401 7.43237L7.27401 7.47904L5.81735 7.47904L5.81735 10.661L16.4993 10.661L16.4993 7.34771L11.21 7.34771C9.81735 7.34771 8.47068 7.08371 8.47068 5.35904C8.47068 3.65971 10.06 3.63437 11.2993 3.63437L16.5 3.63437L16.5 0.324375Z"
                            fill="white" />
                        <path d="M5.81799 16.0564L5.81799 12.739L16.5 12.739L16.5 16.0564L5.81799 16.0564Z"
                            fill="white" />
                        <path
                            d="M0.5 14.399C0.5 15.4597 1.36067 16.3204 2.42133 16.3204C3.482 16.3204 4.36067 15.4597 4.36067 14.399C4.36067 13.3384 3.482 12.4777 2.42133 12.4777C1.36067 12.4784 0.5 13.339 0.5 14.399Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_64_135">
                            <rect width="16" height="16" fill="white" transform="translate(0.5 16.3204) rotate(-90)" />
                        </clipPath>
                    </defs>
                </svg>
            </a>
            <a href="" className="social-icon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <g clipPath="url(#clip0_64_133)">
                        <path
                            d="M16.5 7.08128L9.20218 7.08128L9.20218 4.63269L6.35725 4.26533L6.35725 7.08128L4.54118 7.08128C3.71776 7.08128 3.15661 6.85356 3.15661 5.67145L3.15599 4.16622L0.611384 4.16622C0.577556 4.42653 0.5 5.32007 0.5 6.36007C0.5 8.53175 1.82557 10.0185 4.25942 10.0185L6.35725 10.0185L6.35725 12.4745L9.20218 12.4745L9.20218 10.0185L16.5 10.0185L16.5 7.08128Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_64_133">
                            <rect width="16" height="16" fill="white" transform="translate(0.5 16.3204) rotate(-90)" />
                        </clipPath>
                    </defs>
                </svg>
            </a> */}
                    <a href="" className="social-icon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <g clipPath="url(#clip0_64_133)">
                                <path
                                    d="M16.5 7.08128L9.20218 7.08128L9.20218 4.63269L6.35725 4.26533L6.35725 7.08128L4.54118 7.08128C3.71776 7.08128 3.15661 6.85356 3.15661 5.67145L3.15599 4.16622L0.611384 4.16622C0.577556 4.42653 0.5 5.32007 0.5 6.36007C0.5 8.53175 1.82557 10.0185 4.25942 10.0185L6.35725 10.0185L6.35725 12.4745L9.20218 12.4745L9.20218 10.0185L16.5 10.0185L16.5 7.08128Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_64_133">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5 16.3204) rotate(-90)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/p/DJOMHR3hhxF/" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <g clipPath="url(#clip0_365_2391)">
                                <path
                                    d="M15.9833 4.94233C15.9459 4.09218 15.8084 3.50772 15.6114 3.00127C15.4083 2.46369 15.0957 1.9824 14.6862 1.58229C14.2861 1.17596 13.8016 0.860229 13.2703 0.660239C12.7609 0.463301 12.1795 0.325823 11.3294 0.28834C10.4729 0.247682 10.201 0.238281 8.02866 0.238281C5.85636 0.238281 5.58446 0.247682 4.73114 0.285165C3.881 0.322648 3.29654 0.460248 2.79021 0.657064C2.25251 0.860229 1.77121 1.17279 1.37111 1.58229C0.964783 1.9824 0.649169 2.46687 0.449057 2.99822C0.252119 3.50772 0.114641 4.08901 0.0771582 4.93915C0.0365009 5.79564 0.0270996 6.06754 0.0270996 8.23984C0.0270996 10.4121 0.0365009 10.684 0.0739838 11.5374C0.111467 12.3875 0.249067 12.972 0.446005 13.4784C0.649169 14.016 0.964783 14.4973 1.37111 14.8974C1.77121 15.3037 2.25568 15.6195 2.78704 15.8195C3.29654 16.0164 3.87783 16.1539 4.72809 16.1913C5.58129 16.229 5.85331 16.2382 8.02561 16.2382C10.1979 16.2382 10.4698 16.229 11.3231 16.1913C12.1733 16.1539 12.7577 16.0164 13.2641 15.8195C14.3393 15.4037 15.1895 14.5536 15.6052 13.4784C15.802 12.9689 15.9396 12.3875 15.9771 11.5374C16.0146 10.684 16.024 10.4121 16.024 8.23984C16.024 6.06754 16.0208 5.79564 15.9833 4.94233ZM14.5425 11.4749C14.5081 12.2563 14.3768 12.6782 14.2674 12.9595C13.9986 13.6566 13.4454 14.2098 12.7483 14.4786C12.467 14.588 12.042 14.7193 11.2637 14.7536C10.4198 14.7912 10.1667 14.8005 8.03184 14.8005C5.89702 14.8005 5.64075 14.7912 4.79988 14.7536C4.01848 14.7193 3.59652 14.588 3.31522 14.4786C2.96835 14.3504 2.65261 14.1472 2.39634 13.8816C2.13066 13.6221 1.9275 13.3096 1.7993 12.9627C1.6899 12.6814 1.55865 12.2563 1.52434 11.478C1.48674 10.6341 1.47746 10.3809 1.47746 8.24607C1.47746 6.11125 1.48674 5.85498 1.52434 5.01424C1.55865 4.23284 1.6899 3.81088 1.7993 3.52957C1.9275 3.18258 2.13066 2.86697 2.39951 2.61057C2.65884 2.34489 2.9714 2.14173 3.31839 2.01365C3.5997 1.90426 4.02483 1.773 4.80306 1.73857C5.64697 1.70109 5.9002 1.69169 8.03489 1.69169C10.1729 1.69169 10.426 1.70109 11.2668 1.73857C12.0482 1.773 12.4702 1.90426 12.7515 2.01365C13.0984 2.14173 13.4141 2.34489 13.6704 2.61057C13.9361 2.87002 14.1392 3.18258 14.2674 3.52957C14.3768 3.81088 14.5081 4.23589 14.5425 5.01424C14.58 5.85815 14.5894 6.11125 14.5894 8.24607C14.5894 10.3809 14.58 10.6309 14.5425 11.4749Z"
                                    fill="white" />
                                <path
                                    d="M8.02864 4.12988C5.75951 4.12988 3.91846 5.97082 3.91846 8.24006C3.91846 10.5093 5.75951 12.3502 8.02864 12.3502C10.2979 12.3502 12.1388 10.5093 12.1388 8.24006C12.1388 5.97082 10.2979 4.12988 8.02864 4.12988ZM8.02864 10.9062C6.55655 10.9062 5.36246 9.71227 5.36246 8.24006C5.36246 6.76785 6.55655 5.57389 8.02864 5.57389C9.50085 5.57389 10.6948 6.76785 10.6948 8.24006C10.6948 9.71227 9.50085 10.9062 8.02864 10.9062Z"
                                    fill="white" />
                                <path
                                    d="M13.261 3.96735C13.261 4.49724 12.8313 4.92689 12.3013 4.92689C11.7714 4.92689 11.3418 4.49724 11.3418 3.96735C11.3418 3.43734 11.7714 3.00781 12.3013 3.00781C12.8313 3.00781 13.261 3.43734 13.261 3.96735Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_365_2391">
                                    <rect width="16" height="16" fill="white"
                                        transform="translate(-0.000976562 0.238281)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <div className="social-horizontal"></div>
                    <h6 className="social-link">FOLLOW US</h6>
                </div>
            </Swiper>
        </>
    );
};

export default HeroHomeOne;