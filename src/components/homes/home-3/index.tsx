
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeThree from './HeroHomeThree';
import ServiceHomeThree from './ServiceHomeThree';
import ChoosHomeThree from './ChoosHomeThree';
import Service2HomeOne from '../home/Service2HomeOne'; 
import SliderHomeThree from './SliderHomeThree';
import CtaHomeThree from './CtaHomeThree';
import FunfactHomeOne from '../home/FunfactHomeOne';
import TestimonialHomeOne from '../home/TestimonialHomeOne';
import TeamArea from '@/components/team/TeamArea';
import PricingHomeThree from './PricingHomeThree';
import BlogHomeThree from './BlogHomeThree';
import VideoHomeOne from '../home/VideoHomeOne';
import ClientsHomeOne from '../home/ClientsHomeOne';
import ContactFormHomeThree from './ContactFormHomeThree';

const HomeThree = () => {
  return (
    <>
      <HeaderOne />
      <HeroHomeThree />
      <ServiceHomeThree />
      <ChoosHomeThree />
      <Service2HomeOne />
      <SliderHomeThree />
      <CtaHomeThree /> 
      <FunfactHomeOne style_2={true} />
      <TestimonialHomeOne style_2={true} />
      <TeamArea style_2={true} style_3={true} />
      <PricingHomeThree />
      <BlogHomeThree />
      <VideoHomeOne style_2={true} />
      <ClientsHomeOne />
      <ContactFormHomeThree />
      <FooterOne />
    </>
  );
};

export default HomeThree;