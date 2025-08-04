"use client"
import React from 'react'; 
import dynamic from 'next/dynamic';


const MyTimer = dynamic(() => import("../../common/Timer"), { ssr: false });


const CommingSoon = () => { 

  return (
    <>
        <div className="comming-section ak-bg ak-center" style={{backgroundImage: 'url(/assets/img/not-found-page-bg.png)'}}>
          <div className="comming-content">
              <h1 className="comming-title">Coming Soon</h1> 
              <MyTimer />
          </div>
        </div>
    </>
  );
};

export default CommingSoon;