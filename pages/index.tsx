import React, { useRef } from 'react';
import styled from 'styled-components';
import { PrismicText, SliceZone } from '@prismicio/react';

import { components } from '../slices/index.js';
import { createClient } from '../prismicio';
import Footer from '../components/footer/Footer';
import Header from '../components/header/desktop-header/Header';

const Home = ({ mainSlices, footer, navigation }) => {
  return (
    <div>
      <Header navigationData={navigation.data} />
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
