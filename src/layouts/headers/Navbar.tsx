import menu_data from "@/data/menu-data";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<>
			{menu_data.map((item, i) => (
				<ul key={i} className="ak-nav_list">
					<li className={`${item.has_dropdown ? "menu-item-has-children" : ""}`}>
						<Link
							href={`${item.link}`}
							className={`text-hover-animaiton ${i === 4 && "nav-pages-item"}`}>
							{item.title}
						</Link>
						{item.has_dropdown && (
							<ul>
								{item.sub_menus?.map((sub_item, index) => (
									<li key={index}>
										<Link href={sub_item.link} className="text-hover-animaiton">
											{sub_item.title}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				</ul>
			))}
		</>
	);
};

export default Navbar;
