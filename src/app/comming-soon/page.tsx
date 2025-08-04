import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import CommingSoon from "@/components/comming-soon";

export const metadata: Metadata = {
	title: "Comming Soon Car Repair & Auto Services Next js Template",
	description: "The official Next.js Course Dashboard, built with App Router.",
	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

const index = () => {
	return (
		<Wrapper>
			<CommingSoon />
		</Wrapper>
	);
};

export default index;
