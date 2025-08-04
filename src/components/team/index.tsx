import React from "react";
import CtaAbout from "../about/CtaAbout";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Breadcrumb from "@/common/Breadcrumb";
import TeamAbout from "./TeamAbout";
import TeamArea from "./TeamArea";

const Team = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Team" />
			<TeamAbout />
			<TeamArea />
			<CtaAbout />
			<FooterOne />
		</>
	);
};

export default Team;
