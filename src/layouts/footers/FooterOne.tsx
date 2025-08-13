
"use client";
import Link from 'next/link';
import React from 'react';

const FooterOne = ({style_2}: any) => {
  return (
    <>
       <div className="ak-height-125 ak-height-lg-80"></div>
        <footer className="footer style-1 footer-bg">
            <div className="container">

                
                {style_2 ? <div className="ak-height-100 ak-height-lg-50"></div> :
                <>
                <div className="ak-height-40 ak-height-lg-60"></div>
                <div className="footer-email" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100"
                    data-aos-offset="0">
                    <div className="background-text" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        Newsletter</div>
                    <div className="footer-heading-email">
                        <h5 className="email-title">Sign up for our newsletter to get weekly updates on exclusive
                            offers and discounts!</h5>
                        <div>
                            <p id="ak-alert-footer"></p>
                            <form className="email-form" method="POST" id="footer-email" onSubmit={e => e.preventDefault()}>
                                <input type="text" name="footerEmail" id="footerEmail" placeholder="Enter your email..."
                                    className="email-input" required />
                                <button type="submit" className="submit-btn" id="footerSubmit" name="footerSubmit">
                                    <span className="send">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                            fill="none">
                                            <path
                                                d="M23.0345 3.91676C23.5566 2.42362 22.157 0.976718 20.7126 1.51775L3.06022 8.11754C1.61105 8.65982 1.43579 10.704 2.76894 11.5024L8.40369 14.8748L13.4353 9.67315C13.6633 9.44555 13.9686 9.31961 14.2855 9.32246C14.6024 9.3253 14.9055 9.45671 15.1296 9.68837C15.3537 9.92004 15.4808 10.2334 15.4836 10.561C15.4863 10.8887 15.3645 11.2043 15.1444 11.4399L10.1127 16.6415L13.3761 22.4667C14.1472 23.8448 16.1246 23.6624 16.6491 22.1655L23.0345 3.91676Z"
                                                fill="white" />
                                        </svg>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="ak-height-70 ak-height-lg-30"></div>
                <div className="primary-color-border"></div>
                <div className="ak-height-35 ak-height-lg-30"></div>                
                </>
                
                }

                <div className="footer-logo">
                    <img src="assets/img/logo3-removebg-preview.png"  style={{width:"120px", height:"120px" }} alt="..." />
                    <div className="ak-height-15 ak-height-lg-10"></div>
                </div>
                <div className="footer-content">
                    <div className="footer-info">
                        <p className="desp">Supper Range Car Service Center provides comprehensive automotive repair and maintenance services. With two convenient locations in Sharjah and Al Ain, we offer expert diagnostics, quality workmanship, and exceptional customer service.</p>
                        <div className="ak-height-35 ak-height-lg-30"></div>
                        <div className="d-flex align-items-center gap-3">
                            <div className="heartbeat-icon">
                                <a href="tel:+971564846499">
                                    <span className="ak-heartbeat-btn"><img src="assets/img/phone.svg" alt="..." /></span>
                                </a>
                            </div>
                            <div>
                                <a href="tel:+971564846499" className=" white">Sharjah: +971-56-484 6499</a><br />
                                <a href="tel:+971557108899" className="text-hover-animaiton white">Al Ain: +971-55-710 8899</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-menu-one" >
                        <div className="footer-menu">
                            <p className="menu-title">QUICK LINK</p>
                            <Link href="/about" className="menu-item text-hover-animaiton white">About</Link>
                            <Link href="/service" className="menu-item text-hover-animaiton white">Services</Link>
                            <Link href="/pricing" className="menu-item text-hover-animaiton white">Pricing</Link>
                            <Link href="/team" className="menu-item text-hover-animaiton white">Team</Link>
                            <Link href="/contact" className="menu-item text-hover-animaiton white">Contact Us</Link>
                        </div>
                    </div>
                    <div className="footer-menu-two" >
                        <div className="footer-menu">
                            <p className="menu-title">QUICK LINK</p>
                            <Link href="/appointment" className="menu-item text-hover-animaiton white">Appointment</Link>
                            <Link href="/blog" className="menu-item text-hover-animaiton white">Blog / News</Link>
                            <Link href="/faq" className="menu-item text-hover-animaiton white">FA Question</Link>
                            <Link href="/team" className="menu-item text-hover-animaiton white">Team</Link>
                        </div>
                    </div>
                    <div className="footer-address">
                        <p className="adress-title">LOCATION & CONTACT</p>
                        <div className="mb-2">
                            <span className="me-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19"
                                    fill="none">
                                    <path
                                        d="M7.83533 0.501953C3.9756 0.501953 0.835327 3.4927 0.835327 7.16863C0.835327 8.27215 1.12502 9.36629 1.67574 10.3368L7.45253 18.2871C7.52943 18.4198 7.67598 18.502 7.83533 18.502C7.99467 18.502 8.14122 18.4198 8.21813 18.2871L13.9971 10.3335C14.5456 9.36629 14.8353 8.27211 14.8353 7.16859C14.8353 3.4927 11.6951 0.501953 7.83533 0.501953ZM7.83533 10.502C5.90546 10.502 4.33535 9.0066 4.33535 7.16863C4.33535 5.33066 5.90546 3.83531 7.83533 3.83531C9.76519 3.83531 11.3353 5.33066 11.3353 7.16863C11.3353 9.0066 9.76519 10.502 7.83533 10.502Z"
                                        fill="white" />
                                </svg>
                            </span>
                            <strong>Sharjah Branch:</strong><br />
                            <a href="https://maps.app.goo.gl/NGC9emB97NkzawWp7" target="_blank" rel="noopener noreferrer" className="location">
                                View on Google Maps
                            </a>
                        </div>
                        <div className="mb-2">
                            <span className="me-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19"
                                    fill="none">
                                    <path
                                        d="M7.83533 0.501953C3.9756 0.501953 0.835327 3.4927 0.835327 7.16863C0.835327 8.27215 1.12502 9.36629 1.67574 10.3368L7.45253 18.2871C7.52943 18.4198 7.67598 18.502 7.83533 18.502C7.99467 18.502 8.14122 18.4198 8.21813 18.2871L13.9971 10.3335C14.5456 9.36629 14.8353 8.27211 14.8353 7.16859C14.8353 3.4927 11.6951 0.501953 7.83533 0.501953ZM7.83533 10.502C5.90546 10.502 4.33535 9.0066 4.33535 7.16863C4.33535 5.33066 5.90546 3.83531 7.83533 3.83531C9.76519 3.83531 11.3353 5.33066 11.3353 7.16863C11.3353 9.0066 9.76519 10.502 7.83533 10.502Z"
                                        fill="white" />
                                </svg>
                            </span>
                            <strong>Al Ain Branch:</strong><br />
                            <a href="https://maps.app.goo.gl/8y8tZgZ1AcLxgy2Y7" target="_blank" rel="noopener noreferrer" className="location">
                                View on Google Maps
                            </a>
                        </div>
                        <a href="mailto:contact@superrange.ae" className="email">
                            <span className="me-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18"
                                    fill="none">
                                    <g clipPath="url(#clip0_365_2422)">
                                        <path
                                            d="M19.2194 16.3586C19.669 16.3586 20.0585 16.2102 20.3897 15.9171L14.7234 10.2505C14.5874 10.3479 14.4557 10.4426 14.3312 10.5326C13.9071 10.845 13.563 11.0888 13.2987 11.2635C13.0345 11.4386 12.6829 11.617 12.2441 11.7993C11.8049 11.9817 11.3958 12.0726 11.0163 12.0726H11.0051H10.994C10.6145 12.0726 10.2054 11.9817 9.76625 11.7993C9.32714 11.617 8.97557 11.4386 8.71159 11.2635C8.44736 11.0888 8.10338 10.845 7.67912 10.5326C7.56089 10.4459 7.42977 10.3508 7.28801 10.249L1.62061 15.9171C1.95173 16.2102 2.34153 16.3586 2.79106 16.3586H19.2194Z"
                                            fill="white" />
                                        <path
                                            d="M2.1326 6.68302C1.7086 6.40034 1.33259 6.07659 1.00525 5.71191V14.3331L5.99952 9.33882C5.00038 8.64128 3.71304 7.75703 2.1326 6.68302Z"
                                            fill="white" />
                                        <path
                                            d="M19.8892 6.68302C18.3691 7.71193 17.077 8.59771 16.013 9.34081L21.0053 14.3333V5.71191C20.6852 6.06925 20.3132 6.39278 19.8892 6.68302Z"
                                            fill="white" />
                                        <path
                                            d="M19.2194 0.644531H2.79109C2.21796 0.644531 1.77732 0.83807 1.46864 1.22475C1.15971 1.61161 1.00549 2.09542 1.00549 2.67563C1.00549 3.1443 1.21014 3.65211 1.61926 4.19921C2.02838 4.74609 2.46371 5.17565 2.92505 5.48811C3.17795 5.6668 3.94063 6.19701 5.21308 7.07858C5.89998 7.55458 6.49734 7.96947 7.01067 8.3275C7.44822 8.63237 7.82556 8.89639 8.13711 9.11549C8.17288 9.14058 8.22912 9.18081 8.30378 9.23419C8.38421 9.29196 8.48599 9.36527 8.61155 9.45594C8.85335 9.63081 9.05422 9.77217 9.21421 9.88016C9.37398 9.98819 9.56755 10.1089 9.79464 10.2428C10.0216 10.3766 10.2356 10.4773 10.4364 10.5442C10.6374 10.6111 10.8233 10.6446 10.9944 10.6446H11.0055H11.0167C11.1877 10.6446 11.3737 10.6111 11.5747 10.5442C11.7755 10.4773 11.9894 10.3769 12.2165 10.2428C12.4433 10.1089 12.6366 9.98793 12.7969 9.88016C12.9569 9.77217 13.1578 9.63085 13.3996 9.45594C13.5249 9.36527 13.6267 9.29192 13.7071 9.23437C13.7818 9.18077 13.838 9.1408 13.874 9.11549C14.1167 8.9466 14.4949 8.68367 15.0034 8.33059C15.9287 7.6877 17.2914 6.74146 19.0972 5.48811C19.6403 5.10877 20.0941 4.65099 20.4588 4.11544C20.8228 3.57989 21.0053 3.01812 21.0053 2.43031C21.0053 1.93921 20.8283 1.51898 20.4752 1.16897C20.1217 0.819406 19.703 0.644531 19.2194 0.644531Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_365_2422">
                                            <rect width="21" height="17" fill="white"
                                                transform="translate(0.835327 0.238281)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                         contact@superrange.ae
                        </a>
                        
                    </div>
                </div>
                <div className="ak-height-70 ak-height-lg-30"></div>
                <div className="primary-color-border"></div>
                <div className="copy-right">
                    <p className="title  text-hover-animaiton">Copyright {new Date().getFullYear()}, All Right reserved</p>
                    <div className="social-icon">
                      
                        <a href="https://www.facebook.com/p/Super-Range-Car-Service-Center-61559480229353/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <g clipPath="url(#clip0_365_2385)">
                                    <path
                                        d="M9.2381 16.9756L9.2381 9.67777L11.6867 9.67777L12.0541 6.83284H9.2381V5.01676C9.2381 4.19335 9.46582 3.6322 10.6479 3.6322L12.1532 3.63158V1.08697C11.8929 1.05314 10.9993 0.975586 9.95931 0.975586C7.78764 0.975586 6.30087 2.30116 6.30087 4.735L6.30087 6.83284H3.84485L3.84485 9.67777H6.30087L6.30087 16.9756H9.2381Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_365_2385">
                                        <rect width="16" height="16" fill="white"
                                            transform="translate(-0.000976562 0.975586)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/p/DJOMHR3hhxF/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <g clipPath="url(#clip0_365_2391)">
                                    <path
                                        d="M15.9833 4.94233C15.9459 4.09218 15.8084 3.50772 15.6114 3.00127C15.4083 2.46369 15.0957 1.9824 14.6862 1.58229C14.2861 1.17596 13.8016 0.860229 13.2703 0.660239C12.7609 0.463301 12.1795 0.325823 11.3294 0.28834C10.4729 0.247682 10.201 0.238281 8.02866 0.238281C5.85636 0.238281 5.58446 0.247682 4.73114 0.285165C3.881 0.322648 3.29654 0.460248 2.79021 0.657064C2.25251 0.860229 1.77121 1.17279 1.37111 1.58229C0.964783 1.9824 0.649169 2.46687 0.449057 2.99822C0.252119 3.50772 0.114641 4.08901 0.0771582 4.93915C0.0365009 5.79564 0.0270996 6.06754 0.0270996 8.23984C0.0270996 10.4121 0.0365009 10.684 0.0739838 11.5374C0.111467 12.3875 0.249067 12.972 0.446005 13.4784C0.649169 14.016 0.964783 14.4973 1.37111 14.8974C1.77121 15.3037 2.25568 15.6195 2.78704 15.8195C3.29654 16.0164 3.87783 16.1539 4.72809 16.1913C5.58129 16.229 5.85331 16.2382 8.02561 16.2382C10.1979 16.2382 10.4698 16.229 11.3231 16.1913C12.1733 16.1539 12.7577 16.0164 13.2641 15.8195C14.3393 15.4037 15.1895 14.5536 15.6052 13.4784C15.802 12.9689 15.9396 12.3875 15.9771 11.5374C16.0146 10.684 16.024 10.4121 16.024 8.23984C16.024 6.06754 16.0208 5.79564 15.9833 4.94233ZM14.5425 11.4749C14.5081 12.2563 14.3768 12.6782 14.2674 12.9595C13.9986 13.6566 13.4454 14.2098 12.7483 14.4786C12.467 14.588 12.042 14.7193 11.2637 14.7536C10.4198 14.7912 10.1667 14.8005 8.03184 14.8005C5.89702 14.8005 5.64075 14.7912 4.79988 14.7536C4.01848 14.7193 3.59652 14.588 3.31522 14.4786C2.96835 14.3504 2.65261 14.1472 2.39634 13.8816C2.13066 13.6221 1.9275 13.3096 1.7993 12.9627C1.6899 12.6814 1.55865 12.2563 1.52434 11.478C1.48674 10.6341 1.47746 10.3809 1.47746 8.24607C1.47746 6.11125 1.48674 5.85498 1.52434 5.01424C1.55865 4.23284 1.6899 3.81088 1.7993 3.52957C1.9275 3.18258 2.13066 2.86697 2.39951 2.61057C2.65884 2.34489 2.9714 2.14173 3.31839 2.01365C3.5997 1.90426 4.02483 1.773 4.80306 1.73857C5.64697 1.70109 5.9002 1.69169 8.03489 1.69169C10.1729 1.69169 10.426 1.70109 11.2668 1.73857C12.0482 1.773 12.4702 1.90426 12.7515 2.01365C13.0984 2.14173 13.4141 2.34489 13.6704 2.61057C13.9361 2.87002 14.1392 3.18258 14.2674 3.52957C14.3768 3.81088 14.5081 4.23589 14.5425 5.01424C14.58 5.85815 14.5894 6.11125 14.5894 8.24607C14.5894 10.3809 14.58 10.6309 14.5425 11.4749Z"
                                        fill="white" />
                                    <path
                                        d="M8.02864 4.12988C5.75951 4.12988 3.91846 5.97082 3.91846 8.24006C3.91846 10.5093 5.75951 12.3502 8.02864 12.3502C10.2979 12.3502 12.1388 10.5093 12.1388 8.24006C12.1388 5.97082 10.2979 4.12988 8.02864 4.12988ZM8.02864 10.9062C6.55655 10.9062 5.36246 9.71227 5.36246 8.24006C5.36246 6.76785 6.55655 5.57389 8.02864 5.57389C9.50085 5.57389 10.6948 6.76785 10.6948 8.24006C10.6948 9.71227 9.50085 10.9062 8.02864 10.9062Z"
                                        fill="white" />
                                    <path
                                        d="M13.261 3.96735C13.261 4.49724 12.8313 4.92689 12.3013 4.92689C11.7714 4.92689 11.3418 4.49724 11.3418 3.96735C11.3418 3.43734 11.7714 3.00781 12.3013 3.00781C12.8313 3.00781 13.261 3.43734 13.261 3.96735Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_365_2391">
                                        <rect width="16" height="16" fill="white"
                                            transform="translate(-0.000976562 0.238281)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default FooterOne;
