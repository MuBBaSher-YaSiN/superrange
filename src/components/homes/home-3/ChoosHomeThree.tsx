
import Link from 'next/link';
import React from 'react';

const ChoosHomeThree = () => {
  return (
    <>
        <div className="ak-height-125 ak-height-lg-80"></div>
    <section className="container">
        <div className="choose-us-contain style_three">
            <div className="choose-us-info" data-aos="fade-up">
                <div className="ak-section-heading ak-style-1">
                    <div className="background-text">Feature</div>
                    <h2 className="ak-section-title">Why Choose Us</h2>
                    <p className="ak-section-subtitle">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's stan. Lorem Ipsum is
                        simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's stan.
                    </p>
                </div>
                <div className="ak-height-60 ak-height-lg-30"></div>
                <div className="stroke-heading-text">
                    <h3 className="ak-stroke-text hover-color-changes">
                        Certified Technicians
                    </h3>
                    <h3 className="ak-stroke-text hover-color-changes">
                        Comprehensive Repair Services
                    </h3>
                    <h3 className="ak-stroke-text hover-color-changes">
                        900 Five Star Reviews
                    </h3>
                    <h3 className="ak-stroke-text hover-color-changes">
                        Warranty on Repairs
                    </h3>
                </div>
                <div className="ak-height-60 ak-height-lg-30"></div>
                <Link href="/about" className="common-btn"> View More </Link>
            </div>
            <div className="choose-us-img" data-aos="fade-up" data-aos-delay="150">
                <img src="assets/img/choose-us_2.png" alt="..." />
                <img className="circle-img" src="assets/img/Circle.png" alt="..." />
            </div>
        </div>
    </section>
    </>
  );
};

export default ChoosHomeThree;