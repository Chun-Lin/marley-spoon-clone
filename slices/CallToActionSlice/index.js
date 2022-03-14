import React from 'react';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import styled from 'styled-components';

const CallToActionSection = styled.section`
  background-color: #152231;
`;

const CtaWrapper = styled.div`
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const CtaTitle = styled.h2`
  max-width: 440px;
  margin-bottom: 40px;
  font-size: 2rem;
  line-height: 1.2em;
  text-align: center;
  color: #fff;
  font-weight: 300;

  strong {
    font-weight: 600;
  }
`;

const CtaButton = styled.button`
  max-width: 90%;
  width: 335px;
  padding: 14px 36px;
  border-radius: 5px;
  background-color: #46b4e9;
  background-image: linear-gradient(#46b4e9, #0070af);
  color: #fff;
  font-size: 1.16rem;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #46b4e9;
    background-image: linear-gradient(#46b4e9, #005788);
  }
`;

const BookDemoTextWrapper = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #fff;

  a {
    text-decoration: none;
    color: #46b4e9;
  }
`;

const CallToActionSlice = ({ slice }) => {
  const { primary } = slice;
  const { title, ctaBtnName, signupButtonLink, bookDemoDesc } = primary;

  const ctaBtnClickHandler = (event) => {
    window.location.href = signupButtonLink.url;
  };

  return (
    <CallToActionSection>
      <CtaWrapper>
        <CtaTitle>
          <PrismicRichText field={title} />
        </CtaTitle>
        <CtaButton onClick={ctaBtnClickHandler}>
          <PrismicRichText field={ctaBtnName} />
        </CtaButton>
        <BookDemoTextWrapper>
          <PrismicRichText field={bookDemoDesc} />
        </BookDemoTextWrapper>
      </CtaWrapper>
    </CallToActionSection>
  );
};

export default CallToActionSlice;
