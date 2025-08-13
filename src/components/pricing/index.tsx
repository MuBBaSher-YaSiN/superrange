
import React from 'react';
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PriceHomeOne from '../homes/home/PriceHomeOne';
import AppointmentForm from '../appointment/AppointmentForm';

const Pricing = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb subtitle="Pricing" />
      <PriceHomeOne style_2={true} />
      {/* <AppointmentForm /> */}
      <FooterOne />
    </>
  );
};

export default Pricing;