"use client"
import service_data from '@/data/service_data';
import useStickySidebar from '@/hooks/useStickySidebar';
import Image from 'next/image';
import Link from 'next/link';

const Service2HomeOne = ({ style_2 }: any) => {
    // item slice for pages
    const style = service_data.slice(0, 3);
    const style2 = service_data;
    const data = style_2 ? style2 : style;

    useStickySidebar('.sidebar', '.scroll-end-point');
    useStickySidebar('.sidebar.style-two', '.scroll-end-point.style-two');

    return (
        <>
            <div className="ak-height-125 ak-height-lg-80"></div>
            <div className="d-flex justify-content-center">
                <div className="sticky-content container" >
                    <div className="content style_2">
                        <div className="service">
                            {data.map((item, i) => (
                                <div key={i} className="service-card" data-aos="fade-left">
                                    {/* <Link href="/services-single" className="card-img">
                                        <Image src={item.img} className="ak-bg" alt="..." />
                                    </Link>
                                    <div className="card-info">
                                        <Link href="/services-single" className="card-title">Performance Upgrades and Customization
                                        </Link>
                                        <p className="card-desp">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.
                                            Lorem Ipsum has been the industry's stan.</p>
                                        <Link href="/services-single" className="more-btn">VIEW MORE</Link>
                                    </div> */}
                                    <Link href="/services-single" className="card-img">
                                        <Image src={item.img} className="ak-bg" alt="..." />
                                    </Link>
                                    <div className="card-info">
                                        <Link href="/services-single" className="card-title">{item.title}</Link>
                                        <p className="card-desp">{item.desp}</p>
                                        <Link href="/services-single" className="more-btn">VIEW MORE</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sidebar width-none">
                        <div className="services-content">
                            <div className="ak-section-heading ak-style-1">
                                <div className="background-text" data-aos="fade-right" data-aos-duration="1000">Services</div>
                                <h2 className="ak-section-title">Dedicated<br /> Services</h2>
                                <p className="ak-section-subtitle">Our comprehensive automotive services combine expert craftsmanship with cutting-edge technology. From routine maintenance to complex repairs, our certified technicians deliver reliable solutions that keep your vehicle running safely and efficiently on the road.</p>
                            </div>
                            <div className="ak-height-50 ak-height-lg-10"></div>
                            <a href="#" className="more-btn">VIEW All SERVICES</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-end-point"></div>
        </>
    );
};

export default Service2HomeOne;