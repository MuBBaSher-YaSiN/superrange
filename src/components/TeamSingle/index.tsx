import React from "react";
import Breadcrumb from "@/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import SingleTeamAbout from "./SingleTeamAbout";
import SingleTeamSlider from "./SingleTeamSlider";
import Service2HomeOne from "../homes/home/Service2HomeOne";

const TeamSingle = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Team Single" />
      <SingleTeamAbout />
      <SingleTeamSlider />
      <Service2HomeOne />
			<FooterOne />
		</>
	);
};

export default TeamSingle;
