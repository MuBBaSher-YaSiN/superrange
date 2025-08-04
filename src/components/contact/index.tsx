import Breadcrumb from "@/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import ContactArea from "./ContactArea";

const Contact = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Contact" />
      <ContactArea />
			<FooterOne />
		</>
	);
};

export default Contact;
