"use client"; 

import UseSticky from "@/hooks/UseSticky";
import React, { useState, useEffect } from "react";
// import { GrWhatsapp } from "react-icons/gr";

const ScrollToTop = () => {
	const { sticky }: { sticky: boolean } = UseSticky();

	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => window.removeEventListener("scroll", checkScrollTop);
	}, []);

	return (
	<>  
{/* // <span className='fixed h-44 bottom-2 right-4 z-auto w-44 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer'>
// 					<GrWhatsapp />
// 				</span> */}
			<span className={`ak-scrollup ${sticky && "ak-scrollup-show"}`} onClick={scrollTop}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z" fill="currentColor"></path>
        </svg>
    </span>

		</>
	);
};

export default ScrollToTop;
