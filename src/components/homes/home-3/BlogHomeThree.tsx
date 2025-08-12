"use client"
import Link from 'next/link'; 
import useStickySidebar from '@/hooks/useStickySidebar';

 

const BlogHomeThree = () => {

    useStickySidebar('.sidebar', '.scroll-end-point');
    useStickySidebar('.sidebar.style-two', '.scroll-end-point.style-two');


  return (
    <>
         <div className="ak-height-125 ak-height-lg-80"></div>
    <div className="d-flex justify-content-center">
        <div className="sticky-content style-two container">
            <div className="content style_2">
                <div className="service">
                    <div className="service-card type-two" data-aos="fade-left">
                        <Link href="/services-single" className="card-img">
                            <img src="assets/img/blog_sm_1.jpg" className="ak-bg" alt="..." />
                        </Link>
                        <div className="card-info">
                            <Link href="/services-single" className="card-title">Performance Upgrades and Customization</Link>
                            <p className="card-desp">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                stan.
                            </p>
                            <Link href="/services-single" className="more-btn">VIEW MORE</Link>
                        </div>
                    </div>

                    <div className="service-card type-two" data-aos="fade-left">
                        <Link href="/services-single" className="card-img">
                            <img src="assets/img/blog_sm_2.jpg" className="ak-bg" alt="..." />
                        </Link>
                        <div className="card-info">
                            <Link href="/services-single" className="card-title">From Garage to Glory: Transform Your
                                Vehicle's Health</Link>
                            <p className="card-desp">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                stan.
                            </p>
                            <Link href="/services-single" className="more-btn">VIEW MORE</Link>
                        </div>
                    </div>

                    <div className="service-card type-two" data-aos="fade-left">
                        <Link href="/services-single" className="card-img">
                            <img src="assets/img/blog_sm_3.jpg" className="ak-bg" alt="..." />
                        </Link>
                        <div className="card-info">
                            <Link href="/services-single" className="card-title">The Roadmap to Reliability Essential Car
                                Care Tips</Link>
                            <p className="card-desp">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                stan.
                            </p>
                            <Link href="/services-single" className="more-btn">VIEW MORE</Link>
                        </div>
                    </div>

                    <div className="service-card type-two" data-aos="fade-left">
                        <Link href="/services-single" className="card-img">
                            <img src="assets/img/blog_sm_4.jpg" className="ak-bg" alt="..." />
                        </Link>
                        <div className="card-info">
                            <Link href="/services-single" className="card-title">From Garage to Glory: Transform Your
                                Vehicle's Health</Link>
                            <p className="card-desp">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                stan.
                            </p>
                            <Link href="/services-single" className="more-btn">VIEW MORE</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar style-two width-none">
                <div className="services-content">
                    <div className="ak-section-heading ak-style-1">
                        <div className="background-text" data-aos="fade-right" data-aos-duration="1000">
                            News
                        </div>
                        <h2 className="ak-section-title">Blog / News</h2>
                        <p className="ak-section-subtitle">
                            Lorem Ipsum is simply dummy text of the printing <br />
                            and typesetting industry. Lorem Ipsum has been <br />
                            the industry's stan.
                        </p>
                    </div>
                    <div className="ak-height-50 ak-height-lg-10"></div>
                    <a href="/" className="more-btn">View All Articles</a>
                </div>
            </div>
        </div>
    </div>
    <div className="scroll-end-point style-two"></div>
    </>
  );
};

export default BlogHomeThree;