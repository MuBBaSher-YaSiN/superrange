import React from "react";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import CtaAbout from "../about/CtaAbout";
import FooterOne from "@/layouts/footers/FooterOne";
import ServiceTwoArea from "./ServiceTwoArea";

const ServiceTwo = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Services Two" />
      <ServiceTwoArea />
      <CtaAbout />
      <FooterOne />
		</>
	);
};

export default ServiceTwo;
