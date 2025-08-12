import React from "react";
import CompanyArea from "./CompanyArea";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ChooseArea from "./ChooseArea";
import FunfactHomeOne from "../homes/home/FunfactHomeOne";
import TestimonialHomeOne from "../homes/home/TestimonialHomeOne";
import TeamHomeOne from "../homes/home/TeamHomeOne";
import PriceHomeOne from "../homes/home/PriceHomeOne";
import ClientsHomeOne from "../homes/home/ClientsHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import CtaAbout from "./CtaAbout";

const About = () => {
	return (
		<>
			<HeaderOne />
      {/* <Breadcrumb subtitle="About Us" /> */}
      <CompanyArea />
      <ChooseArea />
			<FunfactHomeOne />
      <TestimonialHomeOne />
      {/* <TeamHomeOne /> */}
      {/* <PriceHomeOne /> */}
      <ClientsHomeOne />
			<CtaAbout />
      <FooterOne />
		</>
	);
};

export default About;
