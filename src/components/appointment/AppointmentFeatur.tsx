
import React from 'react';

const AppointmentFeatur = () => {
  return (
    <>
        <div className="ak-height-125 ak-height-lg-80"></div>
    <div className="container">
        <div className="center-section-heading" data-aos="fade-down">
            <div className="ak-section-heading ak-style-1 ak-type-1">
                <div className="background-text" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                    Proc/Feat</div>
                <h2 className="ak-section-title">Process / Feature</h2>
                <p className="ak-section-subtitle">We offer comprehensive automotive solutions with advanced diagnostics, certified technicians, and quality OEM parts. Our services include complete engine repair, electronic systems diagnosis, preventative maintenance, and performance upgrades—all backed by our workmanship warranty. Experience convenient scheduling, transparent pricing, and our commitment to keeping your vehicle safe and reliable.</p>
            </div>
        </div>
        <div className="ak-height-50 ak-height-lg-50"></div>
        <div className="row  row-cols-1 row-cols-xl-3 g-4 ">
            <div className="service-progress-card" data-aos-duration="300" data-aos="flip-left" data-aos-delay="0">
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
                        <p className="desp">At our showroom, quality is a process. Each product goes through a detailed performance check to ensure durability, function, and finish — so you get only the best.</p>
                    </div>
                </div>
            </div>
            <div className="service-progress-card" data-aos-duration="600" data-aos="flip-left" data-aos-delay="100">
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
                        <p className="desp">Our trained technicians handle everything from minor fixes to major repairs with care and precision. We use quality parts and modern tools to keep your vehicle running smoothly and safely.</p>
                    </div>
                </div>
            </div>
            <div className="service-progress-card" data-aos-duration="1000" data-aos="flip-left" data-aos-delay="150">
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
                        <p className="desp">Keep your fleet running smoothly with our expert repair and maintenance services. We offer timely solutions to reduce downtime and boost reliability.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default AppointmentFeatur;