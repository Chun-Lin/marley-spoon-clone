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
  padding-top: 40px;
  padding-bottom: 40px;
  line-height: 1.6;
  text-align: left;
`;

const Image = styled.img`
  width: calc(100% / 3 * 2);
`;

const BlockQuoteWrapper = styled.div`
  margin-bottom: 12px;
`;

const Figure = styled.figure`
  width: 50%;
`;

const FigCaption = styled.figcaption`
  font-size: 0.83rem;
  margin-left: 60px;

  &:before {
    content: '– ';
    height: 2em;
    float: left;
    margin-right: 0.3em;
  }
`;

const QuoteSection = ({ imgUrl, imgAlt, blockquote, figCaption }) => {
  const shouldShowBlockQuote = blockquote?.length > 0;
  const shouldShowFigCaption = figCaption?.length > 0;

  return (
    <QuoteSectionWrapper>
      <Image src={imgUrl} alt={imgAlt} />
      <Figure>
        {shouldShowBlockQuote && (
          <BlockQuoteWrapper>
            <BlockQuote>
              <PrismicText field={blockquote} />
            </BlockQuote>
          </BlockQuoteWrapper>
        )}
        {shouldShowFigCaption && (
          <FigCaption>
            <PrismicText field={figCaption} />
          </FigCaption>
        )}
      </Figure>
    </QuoteSectionWrapper>
  );
};

export default QuoteSection;
