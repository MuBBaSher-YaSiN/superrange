
"use client";
import React from 'react';
import Count from '@/common/Count';

const counters = [
    { id: 1, number: 10, text: "YEARS OF SERVICE" },
    { id: 2, number: 256, text: "HAPPY CUSTOMERS" },
    { id: 3, number: 112, text: "CUSTOMER SATISFACTION" },
  ];
  

const FunfactHomeOne = ({style_2}: any) => {
  return (
    <>
       <div className="ak-height-125 ak-height-lg-80"></div>
       <div className={`${style_2 && "ak-primary-bg"}`}>
       {style_2 && <div className="ak-height-65 ak-height-lg-50"></div>}
        <div className="container auto-counter-section">
            <div className="row align-items-center gap-lg-0 gap-3" id="counter">
                {counters.map((item, i) => (
                    <div key={i} className="col-lg-4">
                        <div className="ak-funfact ak-style1" data-aos="fade-up">
                            <div className="ak-funfact-number">
                                <div>
                                    <span id="count1" className={`ak-stroke-number counter ${style_2 && 'color-white'}`} data-number="10">
                                        <Count number={item.number} />
                                    </span>
                                </div>
                                <div><span className={`ak-stroke-number ${style_2 && 'color-white'}`}>+</span></div>
                            </div>
                            <div className="ak-funfact-text">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
       {style_2 && <div className="ak-height-65 ak-height-lg-50"></div>}
       </div>

    </>
  );
};

export default FunfactHomeOne;