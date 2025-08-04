
import React from 'react';
import { Metadata } from 'next'; 
import Wrapper from '@/layouts/Wrapper';
import TeamSingle from '@/components/TeamSingle';



export const metadata: Metadata = {
  title: 'Team Single Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


const index = () => {
  return (
    <Wrapper>
      <TeamSingle />
    </Wrapper>
  );
};

export default index;