import styled from 'styled-components'
import { SliceZone } from "@prismicio/react";

import { components } from "../slices/index.js";
import { createClient } from "../prismicio";

const Home = ({ slices }) => {
  return (
    <div>
      <SliceZone slices={slices} components={components} />
    </div>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const caseStudies = await client.getSingle("case-studies");

  return {
    props: {
      slices: caseStudies.data.slices,
    },
  };
}

export default Home;

