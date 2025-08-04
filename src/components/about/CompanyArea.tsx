
// "use client";
// import { useState } from "react";

// const tabContents = [
//   {
//     title: "Mission",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys stan. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     title: "Vision",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. been the industrys stanLorem Ipsum has.",
//   },
//   {
//     title: "History",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys stan.",
//   },
// ];

// const CompanyArea = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabClick = (index: number) => {
//     setActiveTab(index);
//   };

//   return (
// 		<div className="container">
// 		<div className="ak-height-125 ak-height-lg-80"></div>
// 		<div className="company-tab">
// 			<ul className="tabs">
// 				{tabContents?.map((tab, index) => (
// 					<li
// 						key={index}
// 						className={activeTab === index ? "active-tab" : ""}
// 						onClick={() => handleTabClick(index)}
// 					>
// 						{tab.title}
// 					</li>
// 				))}
// 			</ul>

// 			<div className="tabs-content">
// 				<div className="list">
// 					<div className="ak-section-heading ak-style-1 ak-type-1">
// 						<div className="background-text">About Company</div>
// 						<h3 className="desp">{tabContents[activeTab].description}</h3>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
//   );
// };

// export default CompanyArea;























"use client";
import { useState } from "react";

const tabContents = [
  {
    title: "Mission",
    description:
      "To provide honest, reliable automotive repair services with expert craftsmanship and exceptional customer care. We keep your vehicle running safely while building lasting relationships through trust and quality workmanship.",
  },
  {
    title: "Vision",
    description:
      "To be the most trusted automotive service center in the region, known for our technical excellence, fair pricing, and commitment to customer satisfaction. We aim to make car care simple and stress-free for every customer.",
  },
  {
    title: "History",
    description:
      "Founded with a passion for automotive excellence, our team brings over 15 years of combined experience in car repair and maintenance. We've grown from a small garage to a full-service automotive center, always maintaining our commitment to quality and customer trust.",
  },
];

const CompanyArea = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
		<div className="container">
		<div className="ak-height-125 ak-height-lg-80"></div>
		<div className="company-tab">
			<ul className="tabs">
				{tabContents?.map((tab, index) => (
					<li
						key={index}
						className={activeTab === index ? "active-tab" : ""}
						onClick={() => handleTabClick(index)}
					>
						{tab.title}
					</li>
				))}
			</ul>

			<div className="tabs-content">
				<div className="list">
					<div className="ak-section-heading ak-style-1 ak-type-1">
						<div className="background-text">About Company</div>
						<h3 className="desp">{tabContents[activeTab].description}</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default CompanyArea;
