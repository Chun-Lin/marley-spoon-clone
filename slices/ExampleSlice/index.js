import React from 'react';
import { PrismicText } from '@prismicio/react';
import styled from 'styled-components';
import BlockQuote from '../../components/quote-section/BlockQuote';

const ExampleBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imgUrl});
  background-position: center;
  background-size: cover;
  line-height: 1.6;
`;

const ExampleWrapper = styled.div`
  max-width: 1080px;
  margin: auto;
  display: flex;
  justify-content: ${(props) =>
    props.withTextLeft ? 'flex-start' : 'flex-end'};
  padding-top: 80px;
  padding-bottom: 80px;
`;

const TextWrapper = styled.div`
  width: calc(100% / 12 * 5);
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`;

const ExampleTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 12px;
  font-weight: 300;
`;

const DescriptionWrapper = styled.p`
  font-size: 18px;
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ExampleSlice = ({ slice }) => {
  const { primary, variation } = slice;
  const { backgroundImage, title, description, description2, blockquote } =
    primary;
  const shouldShowTextOnTheLeft = variation === 'withTextLeft';
  const shouldShowDescription2 = description2?.length > 0;
  const shouldShowBlockQuote = blockquote?.length > 0;

  return (
    <section>
      <ExampleBackground imgUrl={backgroundImage.url}>
        <ExampleWrapper withTextLeft={shouldShowTextOnTheLeft}>
          <TextWrapper>
            <ExampleTitle>
              <PrismicText field={title} />
            </ExampleTitle>
            <DescriptionWrapper>
              <PrismicText field={description} />
            </DescriptionWrapper>
            {shouldShowDescription2 && (
              <DescriptionWrapper>
                <PrismicText field={description2} />
              </DescriptionWrapper>
            )}
            {shouldShowBlockQuote && (
              <BlockQuote color="rgba(255, 255, 255, 0.4)">
                <PrismicText field={blockquote} />
              </BlockQuote>
            )}
          </TextWrapper>
        </ExampleWrapper>
      </ExampleBackground>
    </section>
  );
};

export default ExampleSlice;
