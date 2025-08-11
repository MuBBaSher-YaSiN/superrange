import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import HomeOne from "@/components/homes/home";
import { GrWhatsapp } from "react-icons/gr";
export const metadata: Metadata = {
  title: 'Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
			<span className='fixed h-44 bottom-6 right-4 z-[11111119] w-44 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer'>
								<GrWhatsapp />
							</span>
		</Wrapper>
	);
};

export default index;
