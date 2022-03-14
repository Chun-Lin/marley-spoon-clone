import React from 'react';
import { PrismicText } from '@prismicio/react';
import styled from 'styled-components';

import Card from '../../components/card/Card';

const ExploreSection = styled.section`
  max-width: 1080;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;
  background-color: #f8f9fa;
`;

const TitleWrapper = styled.div`
  margin-bottom: 12px;
  text-align: center;
  font-size: 0.83rem;
  font-weight: 700;
  color: #848f9d;
`;

const CardGrid = styled.div`
  width: calc(100% / 6 * 5);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 32px;
  padding: 16px 20px;
`;

const ExploreSlice = ({ slice }) => {
  const { primary, items } = slice;
  const { title } = primary;

  return (
    <ExploreSection>
      <TitleWrapper>
        <PrismicText field={title} />
      </TitleWrapper>
      <CardGrid>
        {items.map((item) => {
          const { avatar, cardTitle, cardLink } = item;

          return (
            <Card avatar={avatar} cardTitle={cardTitle} cardLink={cardLink} />
          );
        })}
      </CardGrid>
    </ExploreSection>
  );
};

export default ExploreSlice;
