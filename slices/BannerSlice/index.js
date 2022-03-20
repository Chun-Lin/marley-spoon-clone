import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from 'styled-components';

const BannerImage = styled.img`
  width: 100vw;
  object-fit: cover;
`;

const BannerSlice = ({ slice }) => (
  <section>
    <BannerImage
      src={slice.primary.bannerImage.url}
      alt={slice.primary.bannerImage.alt}
    />
  </section>
);

export default BannerSlice;
