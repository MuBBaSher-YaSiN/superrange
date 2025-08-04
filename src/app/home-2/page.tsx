import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import HomeTwo from "@/components/homes/home-2";

export const metadata: Metadata = {
	title: "Home Two Car Repair & Auto Services Next js Template",
	description: "The official Next.js Course Dashboard, built with App Router.",
	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

const index = () => {
	return (
		<Wrapper>
			<HomeTwo />
		</Wrapper>
	);
};

export default index;
