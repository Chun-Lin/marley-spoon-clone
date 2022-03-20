import React from 'react';
import Image from 'next/image';

const StoreBadge = ({ link, image }) => {
  const { dimensions } = image || { width: 176, height: 48 };
  const { width, height } = dimensions;

  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      <Image
        loading="lazy"
        src={image.url}
        alt={image.alt}
        width={width}
        height={height}
      />
    </a>
  );
};

export default StoreBadge;
