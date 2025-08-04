// "use client"

// import React, { useState } from 'react';
// import VideoPopup from '@/modals/VideoPopup';

// const VideoHomeOne = ({style_2}: any) => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);


//   return (
//     <> 
//       <div className="ak-height-125 ak-height-lg-80"></div>
//       <div className="video-home">
//           <a 
//               onClick={() => setIsVideoOpen(true)}
//               className="ak-video-block ak-style1 ak-video-open ak-bg ak-parallax_bg imagesZoom"
//               style={{backgroundImage: `url(${style_2? '/assets/img/car_video_bg_2.jpg' : '/assets/img/car_video_bg.jpg'})`, cursor: "pointer"}} 
//               data-aos="zoom-out-down" data-aos-duration="1000"
//               data-aos-delay="200">
//               <span className="ak-heartbeat-btn">
//                   <span></span>
//               </span>
//           </a>
//       </div>

//           {/* video modal start */}
//           <VideoPopup
//         isVideoOpen={isVideoOpen}
//         setIsVideoOpen={setIsVideoOpen}
//         videoId={"Ml4XCF-JS0k"}
//       />
//       {/* video modal end */}
//     </>
//   );
// };

// export default VideoHomeOne;






































"use client"

import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';

const VideoHomeOne = ({ style_2 }: any) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoUrl = "https://videos.pexels.com/video-files/3066460/3066460-uhd_2732_1440_24fps.mp4";

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="video-home">
        <a
          onClick={() => setIsVideoOpen(true)}
          className="ak-video-block ak-style1 ak-video-open ak-bg ak-parallax_bg imagesZoom"
          style={{ backgroundImage: `url(${'/assets/img/Hero/Hero1.jpg' })`, cursor: "pointer" }}
          data-aos="zoom-out-down" data-aos-duration="1000"
          data-aos-delay="200">
          <span className="ak-heartbeat-btn">
            <span></span>
          </span>
        </a>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoUrl={videoUrl}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoHomeOne;
