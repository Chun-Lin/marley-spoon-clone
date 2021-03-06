import React from 'react';
import { SliceZone } from '@prismicio/react';
import { GetStaticProps } from 'next';

import { components } from '../slices/index.js';
import { createClient } from '../prismicio';
import Layout from '../components/layout/Layout';

const Home = ({ mainSlices, layout }: { mainSlices: any; layout: any }) => {
  return (
    <Layout {...layout}>
      <SliceZone slices={mainSlices} components={components} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const caseStudies = await client.getSingle('case-studies');
  const footer = await client.getSingle('footer');
  const navigation = await client.getSingle('navigation');
  const seo = await client.getSingle('seo');

  return {
    props: {
      mainSlices: caseStudies.data.slices,
      layout: {
        footer,
        navigation,
        seo,
      },
    },
  };
};

export default Home;
