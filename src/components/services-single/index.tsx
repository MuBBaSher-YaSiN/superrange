import React from "react";
import FaqArea from "./FaqArea";
import CtaAbout from "../about/CtaAbout";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import ServicesSingleArea from "./ServicesSingleArea";

const ServicesSingle = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Services Single" />
      <ServicesSingleArea />
      <FaqArea />
			<CtaAbout />
			<FooterOne />
		</>
	);
};

export default ServicesSingle;
