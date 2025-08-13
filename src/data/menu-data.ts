
const menu_data = [
	{
		title: "Home",
		link: "/", 
		has_dropdown: false,
   
	},
	{
		title: "About",
		link: "/about", 
		has_dropdown: false,

	},
	{
		title: "Service",
		link: "/service", 
		has_dropdown: false,
		
	},
	{
		title: "Blog",
		link: "/blog", 
		has_dropdown: false,
    
	},
	{
		title: "Pages",
		link: "#", 
		has_dropdown: true,
		sub_menus: [
			
			{
				title: "Appointment",
				link: "/appointment",
			},
			{
				title: "Testimonial",
				link: "/testimonial",
			},
			{
				title: "Gallery",
				link: "/gallery",
			},
			{
				title: "Video Gallery",
				link: "/video-gallery",
			},
			{
				title: "Faq",
				link: "/faq",
			},
		],
	},
	{
		title: "Contact",
		link: "/contact", 
		has_dropdown: false,
	},
	{
		title: "Dashboard",
		link: "/login", 
		has_dropdown: false,

	},
];

export default menu_data;
