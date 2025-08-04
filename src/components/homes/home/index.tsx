
import React from 'react';
import HeroHomeOne from './HeroHomeOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceHomeOne from './ServiceHomeOne';
import WhoChoosHomeOne from './WhoChoosHomeOne';
import Service2HomeOne from './Service2HomeOne';
import VideoHomeOne from './VideoHomeOne'; 
import ClientsHomeOne from './ClientsHomeOne';
import FunfactHomeOne from './FunfactHomeOne';
import TestimonialHomeOne from './TestimonialHomeOne';
import TeamHomeOne from './TeamHomeOne';
import PriceHomeOne from './PriceHomeOne';
import BlogHomeOne from './BlogHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <HeroHomeOne />
      <ServiceHomeOne />
      <WhoChoosHomeOne />
      <Service2HomeOne />
      <VideoHomeOne />
      <FunfactHomeOne />
      <ClientsHomeOne />
      <TestimonialHomeOne />
      {/* <TeamHomeOne /> */}
      {/* <PriceHomeOne /> */}
      <BlogHomeOne />
      <FooterOne />
    </>
  );
};

export default HomeOne;