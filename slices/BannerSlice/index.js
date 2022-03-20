import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from 'styled-components';
import Image from 'next/image';

const BannerSection = styled.section`
  position: relative;
  height: 450px;
`;

const BannerSlice = ({ slice }) => {
  const { url, alt, dimensions } = slice.primary.bannerImage;
  return (
    <BannerSection>
      <Image
        src={slice.primary.bannerImage.url}
        alt={slice.primary.bannerImage.alt}
        objectFit="cover"
        layout="fill"
      />
    </BannerSection>
  );
};

export default BannerSlice;
