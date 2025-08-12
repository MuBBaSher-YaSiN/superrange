
import Link from 'next/link';
import React from 'react';

const BlogHomeOne = () => {
  return (
    <>
       <div className="ak-height-125 ak-height-lg-80"></div>
    <div className="container">
        <div className="center-section-heading" data-aos="fade-up">
            <div className="ak-section-heading ak-style-1">
                <div className="background-text" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">BlogNews
                </div>
                <div className="text-md-center">
                    <h2 className="ak-section-title">Blog / News</h2>
                    <p className="ak-section-subtitle">Explore more expert tips, guides, and stories to keep your car running at its best.</p>
                </div>
            </div>
        </div>
        <div className="ak-height-50 ak-height-lg-50"></div>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-5 g-lg-4">
            <div className="col">
                <div className="h-100">
                    <div className="blog-card" data-aos="fade-up" data-aos-delay="100">
                        <Link href="/blog-single">
                            <div className="blog-header-info">
                                <img src="https://cras-next-js.vercel.app/assets/img/blog_3.jpg" alt="..." />
                            </div>
                        </Link>
                        <div className="blog-body-info">
                            <p className="blog-text">17.10.2023</p>
                            <Link href="/blog-single" className="blog-title">
                                The Importance of Regular Car<br />
                                Maintenance
                            </Link>
                        </div>
                        <div className="blog-footer-info">
                            <Link href="/blog-single" className="more-btn">READ MORE</Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col">
                <div className="h-100">
                    <div className="blog-card" data-aos="fade-up" data-aos-delay="100">
                        <Link href="/blog-single">
                            <div className="blog-header-info">
                                <img src="https://cras-next-js.vercel.app/assets/img/blog_1.jpg" alt="..." />
                            </div>
                        </Link>
                        <div className="blog-body-info">
                            <p className="blog-text">05.11.2023</p>
                            <Link href="/blog-single" className="blog-title">The Roadmap to Reliability: Essential <br />
                                Car Care
                                Tips</Link>
                        </div>
                        <div className="blog-footer-info">
                            <Link href="/blog-single" className="more-btn">READ MORE</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="h-100">
                    <div className="blog-card" data-aos="fade-up" data-aos-delay="100">
                        <Link href="/blog-single">
                            <div className="blog-header-info">
                                <img src="https://cras-next-js.vercel.app/assets/img/blog_2.jpg" alt="..." />
                            </div>
                        </Link>
                        <div className="blog-body-info">
                            <p className="blog-text">12.11.2023</p>
                            <Link href="/blog-single" className="blog-title">From Garage to Glory: Transform Your
                                <br />Vehicle's Health
                            </Link>
                        </div>
                        <div className="blog-footer-info">
                            <Link href="/blog-single" className="more-btn">READ MORE</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default BlogHomeOne;