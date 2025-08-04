import React from "react";
import CtaAbout from "../about/CtaAbout";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Service2HomeOne from "../homes/home/Service2HomeOne";

const Service = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Service" />
      <Service2HomeOne style_2={true} />
      <CtaAbout />
      <FooterOne />
		</>
	);
};

export default Service;
