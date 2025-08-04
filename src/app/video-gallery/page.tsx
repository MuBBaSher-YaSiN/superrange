
import React from 'react';
import { Metadata } from 'next'; 
import Wrapper from '@/layouts/Wrapper';
import VideoGallery from '@/components/video-gallery';



export const metadata: Metadata = {
  title: 'Video Gallery Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


const index = () => {
  return (
    <Wrapper>
      <VideoGallery />
    </Wrapper>
  );
};

export default index;