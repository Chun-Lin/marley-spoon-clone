import React from 'react';
import styled from 'styled-components';
import { PrismicRichText, PrismicText } from '@prismicio/react';

const IntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  line-height: 1.6;
  text-align: center;
`;

const CaseTitleImg = styled.img`
  width: calc(100% / 3);
  padding-top: 16px;
  padding-bottom: 16px;
`;

const CaseTitle = styled.h1`
  margin-bottom: 18px;
  font-size: 36px;
  font-weight: 300;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
`;

const DividerWrapper = styled.div`
  width: calc(100% / 3);
  padding-top: 40px;
  padding-bottom: 40px;
`;

const DescriptionWrapper = styled.p`
  width: calc(100% / 3 * 2);
  font-size: 18px;
`;

const IntroductionSlice = ({ slice }) => (
  <IntroductionSection>
    <CaseTitleImg
      src={slice.primary.caseTitleImage.url}
      alt={slice.primary.caseTitleImage.alt}
    />
    <CaseTitle>
      <PrismicText field={slice.primary.title} />
    </CaseTitle>
    <SubTitle>
      <PrismicText field={slice.primary.subTitle} />
    </SubTitle>
    <DividerWrapper>
      <hr />
    </DividerWrapper>
    <DescriptionWrapper>
      <PrismicText field={slice.primary.description} />
    </DescriptionWrapper>
  </IntroductionSection>
);

export default IntroductionSlice;
