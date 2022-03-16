import React from 'react';
import styled from 'styled-components';
import { PrismicRichText, PrismicText } from '@prismicio/react';

const IntroductionSection = styled.section`
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  line-height: 1.6;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 40px;
  }
`;

const CaseTitleImg = styled.img`
  width: calc(100% / 3);
  padding: 16px 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CaseTitle = styled.h1`
  margin-bottom: 18px;
  font-size: 36px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
