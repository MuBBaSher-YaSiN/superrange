import React from "react";
import Breadcrumb from "@/common/Breadcrumb";
import FaqArea from "../services-single/FaqArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import AppointmentForm from "../appointment/AppointmentForm";
import VideoHomeOne from "../homes/home/VideoHomeOne";

const Faq = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Faq" />
			<FaqArea />
      <VideoHomeOne />
			{/* <AppointmentForm /> */}
			<FooterOne />
		</>
	);
};

export default Faq;
