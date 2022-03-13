import React from 'react';
import styled from 'styled-components';
import { PrismicText } from '@prismicio/react';

import BlockQuote from '../../components/quote-section/BlockQuote';
import QuoteSection from '../../components/quote-section/QuoteSection';
import QuoteSectionTwoColumn from '../../components/quote-section/QuoteSectionTwoColumn';

const QuoteSlice = ({ slice }) => {
  const { primary, variation } = slice;
  const { image, title, description, description2, blockquote, figCaption } =
    primary;
  const shouldShowBlockQuote = blockquote?.length > 0;
  const shouldShowFigCaption = figCaption?.length > 0;
  const shouldShowTwoColumn = variation === 'withTwoColumn';

  return (
    <>
      {shouldShowTwoColumn ? (
        <QuoteSectionTwoColumn
          imgUrl={image.url}
          imgAlt={image.alt}
          blockquote={blockquote}
          title={title}
          description={description}
          description2={description2}
        />
      ) : (
        <QuoteSection
          imgUrl={image.url}
          imgAlt={image.alt}
          blockquote={blockquote}
          figCaption={figCaption}
        />
      )}
    </>
  );
};

export default QuoteSlice;
