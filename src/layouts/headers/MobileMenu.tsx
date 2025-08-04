"use client"
import Link from 'next/link';
import menu_data from '@/data/menu-data';
import React, { useState } from 'react';

const MobileMenu = ({menuOpen}: any) => {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <ul className="ak-nav_list mt-2" style={{display: menuOpen ? 'block' : 'none'}}>
        {menu_data.map((item, i) => (
           <li key={i} className="menu-item-has-children">
           <Link href={item.link} className="text-hover-animaiton">
             <div  className="menu-text">{item.title}</div>
            </Link>
            {item.has_dropdown && 
              <ul style={{ display: navTitle === item.title ? "block" : "none", }}> 
              {item.sub_menus?.map((sub_item, index) => (
                  <li key={index}>
                      <Link href={sub_item.link} className="text-hover-animaiton">
                        <div  className="menu-text">
                         {sub_item.title}
                        </div>
                      </Link>
                  </li>                    

              ) )}               
              </ul>            
            }
            {item.has_dropdown && <span className={`ak-munu_dropdown_toggle ${item?.title === navTitle ? "active" : ""}`} onClick={() => openMobileMenu(item?.title ?? "")}></span>}
       </li>
        ))} 
      </ul>
    </>
  );
};

export default MobileMenu;