 
import Link from 'next/link';
import React from 'react';



const ChooseArea = () => {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
    <section className="container">
        <div className="choose-us-container-extents">
            <div className="choose-us-contain">
                <div className="choose-us-info" data-aos="fade-up">
                    <div className="ak-section-heading ak-style-1">
                        <div className="background-text">Feature</div>
                        <h2 className="ak-section-title">Why Choose Us</h2>
                        <p className="ak-section-subtitle">We're your trusted automotive repair partner, combining years of experience with cutting-edge diagnostic tools. Our certified technicians deliver honest service, quality repairs, and exceptional customer care. From routine maintenance to complex repairs, we keep your vehicle running safely and efficiently.</p>
                    </div>
                    <div className="ak-height-60 ak-height-lg-30"></div>
                    <div className="stroke-heading-text">
                        <h3 className="ak-stroke-text hover-color-changes">Certified Technicians</h3>
                        <h3 className="ak-stroke-text hover-color-changes">Comprehensive Repair Services</h3>
                        <h3 className="ak-stroke-text hover-color-changes">900 Five Star Reviews</h3>
                        <h3 className="ak-stroke-text hover-color-changes">Warranty on Repairs</h3>
                    </div>
                    <div className="ak-height-60 ak-height-lg-30"></div>
                    <Link href="/contact" className="common-btn">
                        contact us
                    </Link>
                </div>
                <div className="choose-us-img" data-aos="fade-up" data-aos-delay="150">
                    <img src="https://cras-next-js.vercel.app/assets/img/choose-us.png" alt="..." />
                    <img className="circle-img" src="assets/img/Circle.png" alt="..." />
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default ChooseArea;