import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from 'styled-components';

const VideoSection = styled.section`
  max-width: 1080px;
  margin: auto;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const Iframe = styled.iframe`
  width: calc(100% / 6 * 5);%;
  aspect-ratio: 16 / 9;
`;

const VideoSlice = ({ slice }) => {
  const { primary, variation } = slice;
  const { youtubeId } = primary;
  
  return (
    <VideoSection>
      <Iframe
        loading="lazy"
        src={`https://www.youtube.com/embed/${youtubeId}?modestbranding=1&enablejsapi=1&origin=https://www.edapp.com`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </VideoSection>
  );
};

export default VideoSlice;
