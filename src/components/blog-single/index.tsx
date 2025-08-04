import React from "react";
import SimilarBlog from "./SimilarBlog";
import Breadcrumb from "@/common/Breadcrumb";
import BlogSingleArea from "./BlogSingleArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

const BlogSingle = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Single Blog" />
			<BlogSingleArea />
			<SimilarBlog />
			<FooterOne />
		</>
	);
};

export default BlogSingle;
