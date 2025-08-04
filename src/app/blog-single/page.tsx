import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import BlogSingle from '@/components/blog-single';

export const metadata: Metadata = {
  title: 'Blog Single Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


const index = () => {
  return (
    <Wrapper>
      <BlogSingle />
    </Wrapper>
  );
};

export default index;