import React from 'react';

const StoreBadge = ({ link, image }) => {
  const { dimensions } = image || { width: 176, height: 48 };
  const { width, height } = dimensions;

  return (
    <a href={link} target="_blank" rel="noopener">
      <img
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
