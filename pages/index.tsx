import styled from 'styled-components';
import { PrismicText, SliceZone } from '@prismicio/react';

import { components } from '../slices/index.js';
import { createClient } from '../prismicio';
import Footer from '../components/footer/Footer';

const Home = ({ mainSlices, footer }) => {
  return (
    <div>
      <SliceZone slices={mainSlices} components={components} />
      <Footer footerData={footer.data} />
    </div>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const caseStudies = await client.getSingle('case-studies');
  const footer = await client.getSingle('footer');

  return {
    props: {
      mainSlices: caseStudies.data.slices,
      footer,
    },
  };
}

export default Home;
