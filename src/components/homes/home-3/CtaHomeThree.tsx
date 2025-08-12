
import Link from 'next/link';
import React from 'react';

const CtaHomeThree = () => {
  return (
    <>
       <div className="ak-height-75 ak-height-lg-50"></div>
    <div className="container">
        <div className="play-slider-heading">
            <div className="heading-area">
                <h3 className="title">
                    Get expert car repair and auto services at for a smooth, safe ride.
                </h3>
            </div>
            <div className="desp-area">
                <p className="desp">
                    Your car deserves expert care, and SuperRange delivers just that—fast, reliable, and hassle-free. Reach out today and let us get you back on the road with confidence.
                </p>
                <Link href="/appointment" className="common-btn"> VIEW MORE </Link>
            </div>
        </div>
    </div>
    </>
  );
};

export default CtaHomeThree;