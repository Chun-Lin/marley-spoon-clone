import React from 'react';
import styled from 'styled-components';
import { PrismicRichText, PrismicText, SliceZone } from '@prismicio/react';
import { components } from '../../slices/index';
import FooterSlice from '../../slices/FooterSlice';

const FooterSection = styled.footer`
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 40px;
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    padding: 16px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 16px 40px;
  }
`;

const Divider = styled.div`
  width: 50%;
  height: 1px;
  margin: 40px 0;
  background-color: #e6ebf0;
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  margin: 40px 0;
  padding: 16px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FooterColumnWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterColumnTitle = styled.h4`
  font-weight: 600;
  line-height: 1.34em;
`;

const FooterListUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterList = styled.li`
  a {
    color: #848f9d;
    text-decoration: none;
    transition: all 0.3s;
    font-weight: 300;
  }
`;

const StoreBadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 16px 0;
`;

const StoreBadge = ({ link, image }) => {
  return (
    <a href={link} target="_blank" rel="noopener">
      <img
        loading="lazy"
        src={image.url}
        alt={image.alt}
        width="156"
        height="48"
      />
    </a>
  );
};

const Footer = ({ footerData }) => {
  const { slices, appleStore, googlePlayStore, edLearning } = footerData;

  return (
    <FooterSection>
      <Divider />
      <FooterWrapper>
        {slices.map((slice) => {
          return (
            <FooterColumnWrapper>
              <FooterColumnTitle>
                <PrismicText field={slice.primary.title} />
              </FooterColumnTitle>
              <FooterListUl>
                {slice.items.map((item) => (
                  <FooterList>
                    <a href={item.footerLink}>
                      <PrismicText field={item.footerTitle} />
                    </a>
                  </FooterList>
                ))}
              </FooterListUl>
            </FooterColumnWrapper>
          );
        })}
      </FooterWrapper>
      <StoreBadgeWrapper>
        <StoreBadge
          link={appleStore[0].appleStoreLink}
          image={appleStore[0].appleStoreImage}
        />
        <StoreBadge
          link={googlePlayStore[0].googlePlayStoreLink}
          image={googlePlayStore[0].googlePlayStoreImage}
        />
        <StoreBadge
          link={edLearning[0].edLearningLink}
          image={edLearning[0].edLearningImage}
        />
      </StoreBadgeWrapper>
    </FooterSection>
  );
};

export default Footer;
