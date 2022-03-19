import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PrismicText, SliceZone } from '@prismicio/react';

import { components } from '../slices/index.js';
import { createClient } from '../prismicio';
import { useMediaQuery } from '../hooks';
import Footer from '../components/footer/Footer';
import DesktopHeader from '../components/header/desktop-header/Header';
import MobileHeader from '../components/header/mobile-header/Header';

const Home = ({ mainSlices, footer, navigation }) => {
  const { isMatch: shouldShowMobileHeader } = useMediaQuery({
    mediaQuery: '(max-width: 1140px)',
  });

  return (
    <div>
      {shouldShowMobileHeader ? (
        <MobileHeader navigationData={navigation.data} />
      ) : (
        <DesktopHeader navigationData={navigation.data} />
      )}
      <SliceZone slices={mainSlices} components={components} />
      <Footer footerData={footer.data} />
    </div>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const caseStudies = await client.getSingle('case-studies');
  const footer = await client.getSingle('footer');
  const navigation = await client.getSingle('navigation');
  console.log(
    '🚀 ~ file: index.tsx ~ line 24 ~ getStaticProps ~ navigation',
    navigation
  );

  return {
    props: {
      mainSlices: caseStudies.data.slices,
      footer,
      navigation,
    },
  };
}

export default Home;
