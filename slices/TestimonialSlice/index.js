import React from 'react';
import { PrismicText } from '@prismicio/react';
import styled from 'styled-components';
import Image from 'next/image';

const TestimonialSection = styled.section`
  max-width: 1080px;
  margin: auto;
  align-items: center;
  padding: 80px 40px;
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 40px;
  }
`;

const TitleWrapper = styled.div`
  margin: 16px 0;
  text-align: center;
  font-size: 1.56rem;
  font-weight: 300;
`;

const TestimonialListWrapper = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestimonialBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  text-align: center;
  padding: 16px 20px;
`;

const Avatar = styled.img`
  padding: 16px 0;
  border-radius: 50%;
`;

const TesimonialTitle = styled.h3`
  font-size: 1.16rem;
  font-weight: 300;
  line-height: 1.34em;
  color: #1f2e3c;
`;

const TesimonialDesc = styled.p`
  font-size: 0.83rem;
  color: #848f9d;
`;

const TestimonialSlice = ({ slice }) => {
  const { primary, items } = slice;
  const { title } = primary;

  return (
    <TestimonialSection>
      <TitleWrapper>
        <PrismicText field={title} />
      </TitleWrapper>
      <TestimonialListWrapper>
        {items.map((item) => {
          const { avatar, testimonialTitle, testimonialDesc } = item;

          return (
            <TestimonialBox key={avatar.url}>
              <Avatar
                src={avatar.url}
                alt={avatar.alt}
                width={160}
                height={160}
              />
              <TesimonialTitle>
                <PrismicText field={testimonialTitle} />
              </TesimonialTitle>
              <TesimonialDesc>
                <PrismicText field={testimonialDesc} />
              </TesimonialDesc>
            </TestimonialBox>
          );
        })}
      </TestimonialListWrapper>
    </TestimonialSection>
  );
};

export default TestimonialSlice;
