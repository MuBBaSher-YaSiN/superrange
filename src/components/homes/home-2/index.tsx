import React from "react";
import HeroHomeTwo from "./HeroHomeTwo";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceHomeOne from "../home/ServiceHomeOne";
import WhoChoosHomeOne from "../home/WhoChoosHomeOne";
import ServiceTwoArea from "@/components/service-two/ServiceTwoArea";
import FunfactHomeOne from "../home/FunfactHomeOne";
import ClientsHomeOne from "../home/ClientsHomeOne";
import TestimonialHomeOne from "../home/TestimonialHomeOne";
import TeamArea from "@/components/team/TeamArea";
import VideoHomeOne from "../home/VideoHomeOne";
import PriceHomeOne from "../home/PriceHomeOne";
import BlogHomeOne from "../home/BlogHomeOne"; 
import AppointmentForm from "@/components/appointment/AppointmentForm";
import FooterOne from "@/layouts/footers/FooterOne";

const HomeTwo = () => {
	return (
		<>
			<HeaderOne />
      <HeroHomeTwo />
      <ServiceHomeOne style_2={true} />
      <WhoChoosHomeOne style_2={true} />
      <ServiceTwoArea style_2={true} />
      <FunfactHomeOne style_2={true} />
      <TestimonialHomeOne />
      <ClientsHomeOne />
      <TeamArea style_2={true} />
      <VideoHomeOne />
      <PriceHomeOne style_2={true} />
      <BlogHomeOne />
      {/* <AppointmentForm /> */}
      <FooterOne style_2={true} />

		</>
	);
};

export default HomeTwo;
