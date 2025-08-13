import Link from 'next/link';
import React from 'react';

const TeamHomeOne = () => {
  return (
    <>
        <div className="ak-height-190 ak-height-lg-80"></div>
        <div className="container">
            <div className="team-contant">
                <div className="team-heading mb-5" data-aos="fade-right">
                    <div className="ak-section-heading ak-style-1">
                        <div className="background-text" data-aos="fade-right" data-aos-duration="1000">Team</div>
                        <h2 className="ak-section-title">Our Team</h2>
                        <p className="ak-section-subtitle">Meet the skilled Super Range team—driven by passion, powered by expertise.</p>
                    </div>
                    <div className="ak-height-50 ak-height-lg-10"></div>
                    <Link href="/team" className="more-btn">VIEW MORE</Link>
                </div>
                {/* <div className="teams" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100"
                    data-aos-offset="0">
                    <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 g-md-3">
                        <div className="col">
                            <div className="team-card ak-bg" style={{backgroundImage: `url(/assets/img/team_1.jpg)`}}>
                                <div className="team-style-1">
                                    <div className="team-info">
                                        <div className="team-title">
                                            <Link href="/team-single">Michael Jack</Link>
                                            <p className="desp">Founder CEO</p>
                                        </div>
                                        <div className="team-info-social">
                                            <a href="https://www.facebook.com/" className="icon"><img
                                                    src="assets/img/linkedinicon.svg" alt="..." /></a>
                                            <a href="https://bd.linkedin.com/" className="icon"><img
                                                    src="assets/img/facebookicon.svg" alt="" /></a>
                                            <a href="https://www.instagram.com/" className="icon"><img
                                                    src="assets/img/twittericon.svg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-card ak-bg" style={{backgroundImage: `url(/assets/img/team_2.jpg)`}}>
                                <div className="team-style-1">
                                    <div className="team-info">
                                        <div className="team-title">
                                            <Link href="/team-single">Cathy Sparkman</Link>
                                            <p className="desp">Main Mechanic</p>
                                        </div>
                                        <div className="team-info-social">
                                            <a href="https://www.facebook.com/" className="icon"><img
                                                    src="assets/img/linkedinicon.svg" alt="..." /></a>
                                            <a href="https://bd.linkedin.com/" className="icon"><img
                                                    src="assets/img/facebookicon.svg" alt="" /></a>
                                            <a href="https://www.instagram.com/" className="icon"><img
                                                    src="assets/img/twittericon.svg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-card ak-bg" style={{backgroundImage: `url(/assets/img/team_3.jpg)`}}>
                                <div className="team-style-1">
                                    <div className="team-info">
                                        <div className="team-title">
                                            <Link href="/team-single">Tyra Crawford</Link>
                                            <p className="desp">Mechanic</p>
                                        </div>
                                        <div className="team-info-social">
                                            <a href="https://www.facebook.com/" className="icon"><img
                                                    src="assets/img/linkedinicon.svg" alt="..." /></a>
                                            <a href="https://bd.linkedin.com/" className="icon"><img
                                                    src="assets/img/facebookicon.svg" alt="" /></a>
                                            <a href="https://www.instagram.com/" className="icon"><img
                                                    src="assets/img/twittericon.svg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </>
  );
};

export default TeamHomeOne;