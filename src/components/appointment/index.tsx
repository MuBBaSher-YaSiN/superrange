import Breadcrumb from '@/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import AppointmentForm from './AppointmentForm';
import AppointmentFeatur from './AppointmentFeatur';

const Appointment = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb subtitle="Appointment" />
    <AppointmentForm />
    <AppointmentFeatur />
    <FooterOne />      
    </>
  );
};

export default Appointment;