
"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const TestimonialHomeOne = ({style_2} : any) => {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
        <div className="container">
            <div className="ak-testimonal-controll">
                <div className="testimonal-heading text-center" data-aos="fade-right">
                    <div className="ak-section-heading ak-style-1">
                        <div className="background-text" data-aos="fade-right" data-aos-duration="1000">Testimonial</div>
                        <h2 className="ak-section-title">SEE WHAT OUR Satisfied <br /> Customer SAYS</h2>
                    </div>
                </div>
                <div className="testimonal-controll text-center" data-aos="fade-left">
                    <button className="testimonal-prev button me-3">
                        <span>← prev</span>
                    </button>
                    <button className="testimonal-next button ms-3">
                        <span>next →</span>
                    </button>
                </div>
            </div>
            <div className="ak-height-50 ak-height-lg-50"></div>
            <div className={`ak-testimonal ${style_2 && "style-three"} d-flex justify-content-center`} data-aos="fade-up">
                <Swiper
                loop={true}
                speed={800}
                autoplay={false}
                slidesPerView={1}
                centeredSlides={true}
                pagination={{
                el: ".ak-pagination",
                clickable: true,
                }}
                navigation={{
                nextEl: ".testimonal-next",
                prevEl: ".testimonal-prev",
                }}
                modules={[ Autoplay, Pagination, Navigation]}
                className="ak-slider ak-slider-testimonal w-100"> 
                    
                    {/* Slide 1 - Roberts Bush */}
                    <SwiperSlide className="swiper-slide p-4">
                        <div className="testimonal-info ak-style1 d-flex justify-content-center align-items-center">
                            <div className={`slider-info ${style_2 ? '' : 'ak-style1'} text-center`}>
                                <div className="d-flex justify-content-center align-items-center flex-column mb-4">
                                    <div className="text-center">
                                        <h5 className="name mb-2">Roberts Bush</h5>
                                        <p className="from text-muted">From Canada</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="desp">"Professional Range Rover & Jaguar service in Sharjah. Highly professional team of service advisors & technicians available to assist & solve issues."</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 - Ahmed Al Maktoum */}
                    <SwiperSlide className="swiper-slide p-4">
                        <div className="testimonal-info ak-style1 d-flex justify-content-center align-items-center">
                            <div className={`slider-info ${style_2 ? '' : 'ak-style1'} text-center`}>
                                <div className="d-flex justify-content-center align-items-center flex-column mb-4">
                                    <div className="text-center">
                                        <h5 className="name mb-2">Ahmed Al Maktoum</h5>
                                        <p className="from text-muted">From Sharjah</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="desp">"Exceptional service and outstanding quality! The team exceeded my expectations and delivered exactly what they promised. Highly recommended for anyone looking for professional solutions."</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 - Fatima Al Zahra */}
                    <SwiperSlide className="swiper-slide p-4">
                        <div className="testimonal-info ak-style1 d-flex justify-content-center align-items-center">
                            <div className={`slider-info ${style_2 ? '' : 'ak-style1'} text-center`}>
                                <div className="d-flex justify-content-center align-items-center flex-column mb-4">
                                    <div className="text-center">
                                        <h5 className="name mb-2">Fatima Al Zahra</h5>
                                        <p className="from text-muted">From Sharjah</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="desp">"Amazing experience from start to finish! The attention to detail and customer care was remarkable. I couldn't be happier with the results and will definitely use their services again."</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 4 - Omar Al Shamsi */}
                    <SwiperSlide className="swiper-slide p-4">
                        <div className="testimonal-info ak-style1 d-flex justify-content-center align-items-center">
                            <div className={`slider-info ${style_2 ? '' : 'ak-style1'} text-center`}>
                                <div className="d-flex justify-content-center align-items-center flex-column mb-4">
                                    <div className="text-center">
                                        <h5 className="name mb-2">Omar Al Shamsi</h5>
                                        <p className="from text-muted">From Sharjah</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="desp">"Professional, reliable, and innovative solutions! They understood our business needs perfectly and delivered beyond expectations. Their commitment to excellence is truly impressive."</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 5 - Aisha Al Nuaimi */}
                    <SwiperSlide className="swiper-slide p-4">
                        <div className="testimonal-info ak-style1 d-flex justify-content-center align-items-center">
                            <div className={`slider-info ${style_2 ? '' : 'ak-style1'} text-center`}>
                                <div className="d-flex justify-content-center align-items-center flex-column mb-4">
                                    <div className="text-center">
                                        <h5 className="name mb-2">Aisha Al Nuaimi</h5>
                                        <p className="from text-muted">From Sharjah</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="desp">"Outstanding customer service and top-quality work! The team was responsive, professional, and went above and beyond to ensure our satisfaction. Five stars without hesitation!"</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 6 - Khalid Al Suwaidi */}
                    <SwiperSlide className="swiper-slide p-4">
                        <div className="testimonal-info ak-style1 d-flex justify-content-center align-items-center">
                            <div className={`slider-info ${style_2 ? '' : 'ak-style1'} text-center`}>
                                <div className="d-flex justify-content-center align-items-center flex-column mb-4">
                                    <div className="text-center">
                                        <h5 className="name mb-2">Khalid Al Suwaidi</h5>
                                        <p className="from text-muted">From Sharjah</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="desp">"Incredible value for money and exceptional results! Their expertise and dedication made all the difference. I'm extremely satisfied with the outcome and highly recommend their services."</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 7 - Mariam Al Ketbi */}
                    <SwiperSlide className="swiper-slide p-4">
                        <div className="testimonal-info ak-style1 d-flex justify-content-center align-items-center">
                            <div className={`slider-info ${style_2 ? '' : 'ak-style1'} text-center`}>
                                <div className="d-flex justify-content-center align-items-center flex-column mb-4">
                                    <div className="text-center">
                                        <h5 className="name mb-2">Mariam Al Ketbi</h5>
                                        <p className="from text-muted">From Sharjah</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="desp">"Fast, efficient, and reliable service! They completed our project on time and within budget. The quality of work speaks for itself. I would definitely choose them again for future projects."</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                
                </Swiper>
            </div>
        </div>
    </>
  );
};

export default TestimonialHomeOne;
