import Link from "next/link";
import React from "react";

const CtaAbout = () => {
	return (
		<>
			<div className="ak-height-125 ak-height-lg-80"></div>
			<div className="container">
				<div className="cta" data-aos="fade-right">
					<span className="border-pr"></span>
					<span className="border-wh"></span>
					<div className="cta-info">
						<h2 className="cta-title" data-aos="fade-left" data-aos-delay="100">
							Get in touch with our experts
						</h2>
						<p className="cta-desp">
							Got car troubles? Let SuperRange bring your ride back to life! Our expert mechanics are just a message away—fast, reliable, and ready to get you back on the road. Reach out today and experience top-tier car care that goes the extra mile.
						</p>
						<Link href="/contact" className="cta-btn">
							<img src="assets/img/phone.svg" alt="..." />
							<span className="ms-2"> GET IN TOUCH WITH US</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default CtaAbout;
