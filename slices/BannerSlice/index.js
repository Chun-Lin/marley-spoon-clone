import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from 'styled-components';
import Image from 'next/image';

const BannerImage = styled(Image)`
  width: 100vw;
  object-fit: cover;
`;

const BannerSlice = ({ slice }) => {
  const { url, alt, dimensions } = slice.primary.bannerImage;
  return (
    <section>
      <BannerImage
        src={slice.primary.bannerImage.url}
        alt={slice.primary.bannerImage.alt}
        objectFit="cover"
        width={dimensions.width}
        height={dimensions.height}
      />
    </section>
  );
};

export default BannerSlice;
