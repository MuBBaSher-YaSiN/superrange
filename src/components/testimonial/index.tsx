import Breadcrumb from '@/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import TestimonialHomeOne from '../homes/home/TestimonialHomeOne';

const Testimonial = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb subtitle="Testimonial" />
      <TestimonialHomeOne />
      <FooterOne />
    </>
  );
};

export default Testimonial;