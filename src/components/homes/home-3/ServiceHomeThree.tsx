
import React from 'react';

const ServiceHomeThree = () => {
  return (
    <>
        <div className="ak-height-125 ak-height-lg-80"></div>
        <section className="container">
            <div className="row row-cols-1 row-cols-xl-3 g-4">
                <div className="service-progress-card style-three" data-aos="fade-up">
                    <div className="progress-item">
                        <h4 className="ak-stroke-number color-white">01</h4>
                        <div className="ak-border-width"></div>
                    </div>
                    <div className="service-item">
                        <div className="heartbeat-icon">
                            <a href="/">
                                <span className="ak-heartbeat-btn"><img src="assets/img/speedome.svg" alt="..." /></span>
                            </a>
                        </div>
                        <div className="service-info">
                            <h4 className="title">PERFOMANCE CHECK</h4>
                            <p className="desp">
                               Ensure your vehicle is at its peak with SuperRange’s comprehensive performance check—precision testing for power, safety, and reliability.</p>
                        </div>
                    </div>
                </div>
                <div className="service-progress-card style-three" data-aos="fade-up" data-aos-delay="100">
                    <div className="progress-item">
                        <h4 className="ak-stroke-number color-white">02</h4>
                        <div className="ak-border-width"></div>
                    </div>
                    <div className="service-item">
                        <div className="heartbeat-icon">
                            <a href="/">
                                <span className="ak-heartbeat-btn"><img src="assets/img/car-repair.svg" alt="..." /></span>
                            </a>
                        </div>
                        <div className="service-info">
                            <h4 className="title">AUTO REPAIR</h4>
                            <p className="desp">
                                From minor fixes to major overhauls, SuperRange delivers expert auto repair to keep your car running smoothly and safely.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service-progress-card style-three" data-aos="fade-up" data-aos-delay="150">
                    <div className="progress-item">
                        <h4 className="ak-stroke-number color-white">03</h4>
                        <div className="ak-border-width"></div>
                    </div>
                    <div className="service-item">
                        <div className="heartbeat-icon">
                            <a href="/">
                                <span className="ak-heartbeat-btn"><img src="assets/img/car.svg" alt="..." /></span>
                            </a>
                        </div>
                        <div className="service-info">
                            <h4 className="title">FLEET SERVICES</h4>
                            <p className="desp">
                                Keep your business moving with SuperRange’s reliable fleet services—expert maintenance and repairs to maximize uptime and performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ServiceHomeThree;