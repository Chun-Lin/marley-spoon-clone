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
  gap: 40px;
  padding: 120px 0;
  line-height: 1.6;
  text-align: left;

  @media screen and (max-width: 768px) {
    padding: 80px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 60px 20px;
  }
`;

const TopArea = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
