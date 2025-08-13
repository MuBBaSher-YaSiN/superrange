import React from "react";
import CtaAbout from "../about/CtaAbout";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Breadcrumb from "@/common/Breadcrumb";
import TeamAbout from "./TeamAbout";
import TeamArea from "./TeamArea";
import TeamHomeOne from "../homes/home/TeamHomeOne";

const Team = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Team" />
			<TeamHomeOne/>
			<TeamArea />
			<CtaAbout />
			<FooterOne />
		</>
	);
};

export default Team;
