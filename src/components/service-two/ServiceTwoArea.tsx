"use client" 
import Link from "next/link";
import Image from "next/image"; 
import service_data_2 from "@/data/service_data_2";
import useStickySidebar from "@/hooks/useStickySidebar";
 
const ServiceTwoArea = ({style_2}: any) => {
	const service_data = style_2 ? service_data_2.slice(0, 6) : service_data_2;

	useStickySidebar('.sidebar', '.scroll-end-point');
	useStickySidebar('.sidebar.style-two', '.scroll-end-point.style-two');

	return (
		<>
			<div className={`ak-height-${style_2 ? "125" : "75"} ak-height-lg-80`}></div>
			<div className="container">
				{style_2 && 
				<>
				 <div className="center-section-heading" data-aos="fade-up">
            <div className="ak-section-heading ak-style-1">
                <div className="background-text" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                    SERVICES
                </div>
                <div className="text-md-center">
                    <h2 className="ak-section-title">DEDICATED SERVICES</h2>
                    <p className="ak-section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting
                        <br />industry. Lorem Ipsum has been the industry's stan.
                    </p>
                </div>
            </div>
        </div>
        <div className="ak-height-50 ak-height-lg-50"></div>
				</>
				}
				<div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 g-4">
					{service_data.map((item, i) => (
						<div className="col" key={i}>
							<div className={`service-card-style-2 ${style_2 && "type-two"}`} data-aos="fade-up">
								<div className="service-icon">
									<Image src={item.icon} alt={item.title} />
								</div>
								<div className="service-desp">
									<Link href="/services-single" className="title">
										{item.title}
									</Link>
									<p className="desp">{item.description}</p>
									{style_2 ? 
									  <div className=" view-more-btn">
											<Link href="/services-single" className="more-btn"> VIEW MORE </Link>
										 </div>
									 : 
									 <Link href="/services-single" className="more-btn"> VIEW MORE </Link>
									}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ServiceTwoArea;
