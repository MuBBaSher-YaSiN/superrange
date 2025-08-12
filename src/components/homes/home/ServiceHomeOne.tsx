import React from 'react';

const ServiceHomeOne = ({style_2}: any) => {
  return (
    <>
        {style_2 ? null : <div className="ak-height-125 ak-height-lg-80"></div>}
        <section className="container">
            <div className={`row  row-cols-1 row-cols-xl-3 g-4 ${style_2 ? "service-progress-card-position-changes" : ""}`}>
                <div className={`service-progress-card ${style_2 && "style-two"}`} data-aos="fade-up">
                    {style_2 ? null :
                    <div className="progress-item">
                        <h4 className="ak-stroke-number color-white">01</h4>
                        <div className="ak-border-width"></div>
                    </div>
                    }
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
                <div className={`service-progress-card ${style_2 && "style-two"}`} data-aos="fade-up" data-aos-delay="100">
                    {style_2 ? null : 
                    <div className="progress-item">
                        <h4 className="ak-stroke-number color-white">02</h4>
                        <div className="ak-border-width"></div>
                    </div>                    
                    }
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
                <div className={`service-progress-card ${style_2 && "style-two"}`} data-aos="fade-up" data-aos-delay="150">
                    {style_2 ? null :
                    <div className="progress-item">
                        <h4 className="ak-stroke-number color-white">03</h4>
                        <div className="ak-border-width"></div>
                    </div>
                    }
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
        </section>
    </>
  );
};

export default ServiceHomeOne;
