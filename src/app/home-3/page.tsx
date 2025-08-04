
import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import HomeThree from '@/components/homes/home-3';

export const metadata: Metadata = {
	title: "Home Three Car Repair & Auto Services Next js Template",
	description: "The official Next.js Course Dashboard, built with App Router.",
	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

const index = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  );
};

export default index;