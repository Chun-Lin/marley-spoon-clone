import React from 'react';
import { PrismicText } from '@prismicio/react';
import styled from 'styled-components';

import Card from '../../components/card/Card';

const ExploreSection = styled.section`
  background-color: #f8f9fa;
`;

const ExploreWrapper = styled.div`
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;

  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 40px;
  }
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

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

const ExploreSlice = ({ slice }) => {
  const { primary, items } = slice;
  const { title } = primary;

  return (
    <ExploreSection>
      <ExploreWrapper>
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
      </ExploreWrapper>
    </ExploreSection>
  );
};

export default ExploreSlice;
