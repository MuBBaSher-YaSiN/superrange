
import Link from 'next/link';
import React from 'react';

const SimilarBlog = () => {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
    <div className="container">
        <div className="center-section-heading" data-aos="fade-up">
            <div className="ak-section-heading ak-style-1 ak-type-1">
                <div className="background-text">SIMILARBLOG</div>
                <h2 className="ak-section-title">SIMILAR BLOG</h2>
                <p className="ak-section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's stan.</p>
            </div>
        </div>
        <div className="ak-height-50 ak-height-lg-50"></div>
        <div className="blog">
            <div className="blog-card" data-aos="fade-up">
                <Link href="/blog-single">
                    <div className="blog-header-info">
                        <img src="https://cras-next-js.vercel.app/assets/img/blog_4.jpg" alt="..." />
                    </div>
                </Link>
                <div className="blog-body-info">
                    <p className="blog-text">12.11.2023</p>
                    <Link href="/blog-single" className="blog-title">From Garage to Glory: Transform Your Vehicle's
                        Health</Link>
                </div>
                <div className="blog-footer-info">
                    <Link href="/blog-single" className="more-btn">VIEW MORE</Link>
                </div>
            </div>
            <div className="blog-card" data-aos="fade-up" data-aos-delay="50">
                <Link href="/blog-single">
                    <div className="blog-header-info">
                        <img src="https://cras-next-js.vercel.app/assets/img/blog_5.jpg" alt="..." />
                    </div>
                </Link>
                <div className="blog-body-info">
                    <p className="blog-text">12.11.2023</p>
                    <Link href="/blog-single" className="blog-title">From Garage to Glory: Transform Your Vehicle's
                        Health</Link>
                </div>
                <div className="blog-footer-info">
                    <Link href="/blog-single" className="more-btn">VIEW MORE</Link>
                </div>
            </div>
            <div className="blog-card" data-aos="fade-up" data-aos-delay="100">
                <Link href="/blog-single">
                    <div className="blog-header-info">
                        <img src="https://cras-next-js.vercel.app/assets/img/blog_6.jpg" alt="..." />
                    </div>
                </Link>
                <div className="blog-body-info">
                    <p className="blog-text">12.11.2023</p>
                    <Link href="/blog-single" className="blog-title">From Garage to Glory: Transform Your Vehicle's
                        Health</Link>
                </div>
                <div className="blog-footer-info">
                    <Link href="/blog-single" className="more-btn">VIEW MORE</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default SimilarBlog;