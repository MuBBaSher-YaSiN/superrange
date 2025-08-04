
import Breadcrumb from '@/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import GalleryArea from './GalleryArea';

const Gallery = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb subtitle="Gallery" />
    <GalleryArea />
    <FooterOne />      
    </>
  );
};

export default Gallery;