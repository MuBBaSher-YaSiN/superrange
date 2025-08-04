import Breadcrumb from "@/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import VideoGalleryArea from "./VideoGalleryArea";

const VideoGallery = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Video Gallery" />
      <VideoGalleryArea />
			<FooterOne />
		</>
	);
};

export default VideoGallery;
