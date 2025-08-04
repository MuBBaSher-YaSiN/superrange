// "use client" 

// import Image from 'next/image';
// import React, { useState } from 'react';
// import gallery_data from '@/data/gallery_data'; 
// import ImagePopup from '@/modals/ImagePopup';


// const GalleryArea = () => {

//   	// photoIndex
// 	const [photoIndex, setPhotoIndex] = useState(null);
// 	// image open state
// 	const [isOpen, setIsOpen] = useState(false);
// 	// handleImagePopup
// 	const handleImagePopup = (i: any) => {
// 		setPhotoIndex(i);
// 		setIsOpen(true);
// 	};

//   const image = gallery_data.map((item) => item.thumbnail);
  
//   return (
//     <>

// <div className="ak-height-75 ak-height-lg-80"></div>
//     <section className="container">
//         <div className="gallery" id="static-thumbnails">

//         {gallery_data?.map((image, index) => (
//             <a 
//               key={index}
//               style={{ cursor: "pointer" }}
//               onClick={() => handleImagePopup(index)}
//               className={`item ${image.orientation}`}
//             >
//               <img src={image.thumbnail} alt={image.orientation} />
//               <div className="frame gallery-hover-icon">
//                 <span>
//                   <img src="/assets/img/icon/zoom.svg" alt="zoom" />
//                 </span>
//               </div>
//             </a>
//           ))} 
//         </div>
//     </section>



//       	{/* image light box start */}
// 					{isOpen && (
// 						<ImagePopup
// 							images={image}
// 							setIsOpen={setIsOpen}
// 							photoIndex={photoIndex}
// 							setPhotoIndex={setPhotoIndex}
// 						/>
// 					)}
// 					{/* image light box end */}
//     </>
//   );
// };

// export default GalleryArea;










































"use client" 

import Image from 'next/image';
import React, { useState } from 'react';
import gallery_data from '@/data/gallery_data'; 
import ImagePopup from '@/modals/ImagePopup';


const GalleryArea = () => {

  	// photoIndex
	const [photoIndex, setPhotoIndex] = useState(null);
	// image open state
	const [isOpen, setIsOpen] = useState(false);
	// handleImagePopup
	const handleImagePopup = (i: any) => {
		setPhotoIndex(i);
		setIsOpen(true);
	};

  const image = gallery_data.map((item) => item.thumbnail);
  
  return (
    <>

<div className="ak-height-75 ak-height-lg-80"></div>
    <section className="container">
        <div className="gallery" id="static-thumbnails">

        {gallery_data?.map((image, index) => (
            <a 
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => handleImagePopup(index)}
              className={`item ${image.orientation}`}
            >
              <img src={image.thumbnail} alt={image.orientation} />
              <div className="frame gallery-hover-icon">
                <span>
                  <img src="/assets/img/icon/zoom.svg" alt="zoom" />
                </span>
              </div>
            </a>
          ))} 
        </div>
    </section>



      	{/* image light box start */}
					{isOpen && (
						<ImagePopup
							images={image}
							setIsOpen={setIsOpen}
							photoIndex={photoIndex}
							setPhotoIndex={setPhotoIndex}
						/>
					)}
					{/* image light box end */}
    </>
  );
};

export default GalleryArea;