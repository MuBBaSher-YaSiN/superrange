// import ModalVideo from "react-modal-video";

// const VideoPopup = ({
//   isVideoOpen,
//   setIsVideoOpen,
//   videoId = "bgMEvrd2E", 
  
// }:any ) => {
//   return (
//     <>
//       <ModalVideo
//         channel="youtube"
//         // autoplay
//         isOpen={isVideoOpen}
//         videoId={videoId}
//         onClose={() => setIsVideoOpen(false)}
//       />
//     </>
//   );
// };

// export default VideoPopup;
























import React from 'react';
// Make sure Bootstrap is imported in your project

interface VideoPopupProps {
  isVideoOpen: boolean;
  setIsVideoOpen: (isOpen: boolean) => void;
  videoUrl?: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({
  isVideoOpen,
  setIsVideoOpen,
  videoUrl = '',
}) => {
  if (!isVideoOpen) return null;

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75"
      style={{ zIndex: 1050 }}
      onClick={() => setIsVideoOpen(false)}
    >
      <div className="position-relative w-75" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
        <button 
          className="position-absolute top-0 end-0 btn btn-link text-white fs-2"
          style={{ marginTop: '-40px' }}
          onClick={() => setIsVideoOpen(false)}
        >
          &times;
        </button>
        <video 
          controls 
          autoPlay 
          className="w-100 h-auto"
          src={videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPopup;
