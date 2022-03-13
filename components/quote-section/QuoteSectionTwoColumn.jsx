import React from 'react';
import styled from 'styled-components';
import { PrismicText } from '@prismicio/react';

import BlockQuote from './BlockQuote';

const QuoteSectionWrapper = styled.section`
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 120px;
  line-height: 1.6;
  text-align: left;
`;

const TopArea = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

const Title = styled.h2`
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

const ImageWrapper = styled.div`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const BlockquoteWrapper = styled.div`
  width: calc(100% / 3 * 2);
`;

const QuoteSectionTwoColumn = ({
  imgUrl,
  imgAlt,
  title,
  description,
  description2,
  blockquote,
}) => {
  const shouldShowDescription2 = description2?.length > 0;
  const shouldShowBlockQuote = blockquote?.length > 0;

  return (
    <QuoteSectionWrapper>
      <TopArea>
        <TextWrapper>
          <Title>
            <PrismicText field={title} />
          </Title>
          <DescriptionWrapper>
            <PrismicText field={description} />
          </DescriptionWrapper>
          {shouldShowDescription2 && (
            <DescriptionWrapper>
              <PrismicText field={description2} />
            </DescriptionWrapper>
          )}
        </TextWrapper>
        <ImageWrapper>
          <Image src={imgUrl} alt={imgAlt} />
        </ImageWrapper>
      </TopArea>
      {shouldShowBlockQuote && (
        <BlockquoteWrapper>
          <BlockQuote>
            <PrismicText field={blockquote} />
          </BlockQuote>
        </BlockquoteWrapper>
      )}
    </QuoteSectionWrapper>
  );
};

export default QuoteSectionTwoColumn;
