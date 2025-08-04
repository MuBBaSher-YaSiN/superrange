
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's stan. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                </p>
                <Link href="/appointment" className="common-btn"> VIEW MORE </Link>
            </div>
        </div>
    </div>
    </>
  );
};

export default CtaHomeThree;