import React, { useState } from 'react';
import { PrismicRichText, PrismicText, SliceZone } from '@prismicio/react';
import styled from 'styled-components';

import SubMenuDropdown from './SubMenuDropdown';
import MenuDropdownWrapper from './MenuDropdownWrapper';

const MenuDropdownItem = styled.li`
  position: relative;

  && {
    a {
      padding: 2px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      color: #1f2e3c;
      font-size: 16px;
      font-weight: 300;

      &:after {
        content: '';
        width: ${(props) => (props.shouldShowArrowIcon ? '6px' : '0')};
        height: ${(props) => (props.shouldShowArrowIcon ? '6px' : '0')};
        margin-left: 6px;
        border-style: ${(props) =>
          props.shouldShowArrowIcon ? 'solid' : 'none'};
        border-width: 1.5px 1.5px 0 0;
        transform: rotate(45deg);
      }
    }
  }

  &:hover {
    background-color: ${(props) =>
      props.shouldShowArrowIcon ? 'none' : '#e6ebf0'};
  }
`;

const LoginItemLink = styled.a`
  display: flex;
  justify-content: flex-start;
`;

const ImageWrapper = styled.img`
  width: 55px;
  height: 55px;
`;

const TitleWrapper = styled.h5`
  font-size: 0.833rem;
  font-weight: 700;
`;

const SubTitleWrapper = styled.p`
  font-size: 16px;
  font-weight: 300;
`;

const LoginDropdown = ({ listData }) => {
  if (!listData) {
    return null;
  }

  const {
    adminImage,
    adminLink,
    adminSubTitle,
    adminTitle,
    learnImage,
    learnLink,
    learnSubTitle,
    learnTitle,
  } = listData;

  return (
    <>
      <MenuDropdownItem>
        <LoginItemLink href={learnLink?.url}>
          <ImageWrapper
            src={learnImage.url}
            alt={learnImage.alt}
            width="56"
            height="53"
          />
          <div>
            <TitleWrapper>
              <PrismicText field={learnTitle} />
            </TitleWrapper>
            <SubTitleWrapper>
              <PrismicText field={learnSubTitle} />
            </SubTitleWrapper>
          </div>
        </LoginItemLink>
      </MenuDropdownItem>
      <MenuDropdownItem>
        <LoginItemLink href={adminLink?.url}>
          <ImageWrapper
            src={adminImage.url}
            alt={adminImage.alt}
            width="56"
            height="53"
          />
          <div>
            <TitleWrapper>
              <PrismicText field={adminTitle} />
            </TitleWrapper>
            <SubTitleWrapper>
              <PrismicText field={adminSubTitle} />
            </SubTitleWrapper>
          </div>
        </LoginItemLink>
      </MenuDropdownItem>
    </>
  );
};

export default LoginDropdown;
