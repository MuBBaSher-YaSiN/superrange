"use client";
// importing aos
import AOS from "aos";
import 'aos/dist/aos.css'

import { useEffect } from "react";
import ScrollToTop from "../common/ScrollToTop";
 
const Wrapper = ({ children }: any) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			require("bootstrap/dist/js/bootstrap");
		}
	}, []);

 
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			{children}
			<ScrollToTop />
		</>
	);
};

export default Wrapper;
