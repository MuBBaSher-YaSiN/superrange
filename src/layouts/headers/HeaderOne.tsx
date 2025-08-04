"use client";
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const HeaderOne = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
  
    useEffect(() => { 

    const header = document.querySelector(".ak-sticky_header") as HTMLElement;
    if (!header) return;
    
    const headerHeight = header.offsetHeight + 30;
      
  
      const handleScroll = () => {
        const scrollTop = window.scrollY;
  
        // Add or remove sticky class
        if (scrollTop >= headerHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
          setIsVisible(false);
        }
  
        // Show or hide sticky header on scroll
        if (isSticky) {
          if (scrollTop < lastScrollTop) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
  
        setLastScrollTop(scrollTop);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isSticky, lastScrollTop]);


    // toggle menu
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    } 
      

  return (
    <>
      <header  
      className={`ak-site_header ak-style1 ak-sticky_header ${isSticky ? "ak-gescout_sticky" : ""} ${isVisible ? "ak-gescout_show" : ""}`}
      >
        <div className="ak-main_header">
            <div className="container">
                <div className="ak-main_header_in">
                    <div className="">
                        <Link className="" href="/">
                            <img src="assets/img/logo3-removebg-preview.png" style={{width:"90px", height:"90px" }} className='' alt="..." />
                        </Link>
                    </div>
                    <div className="ak-main-header-center">
                        <div className="ak-nav ak-medium">
                           <Navbar />
                        </div>
                        <div className="ak-nav ak-medium d-md-block d-sm-block d-xl-none d-xxl-none" style={{display: menuOpen ? "block" : "none"}}>
                           <MobileMenu menuOpen={menuOpen} />
                        </div>
                        <span className={`ak-munu_toggle ${menuOpen ? "ak-toggle_active" : ""}`} onClick={handleMenuToggle}><span></span></span>

                    </div>
                    <div className="ak-main-header-right">
                        <a href="tel:1-800-915-6271">
                            <div className="d-flex align-items-center gap-3">
                                <div className="heartbeat-icon">
                                    <span className="ak-heartbeat-btn"><img src="assets/img/phone.svg" alt="..." /></span>
                                </div>
                                <h6> +971-56-484 6499</h6>
                                {/* <h6> +971-55-710 8899</h6> */}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="nav-bar-border"></div>
    </header>
    </>
  );
};

export default HeaderOne;