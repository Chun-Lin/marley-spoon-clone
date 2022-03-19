import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PrismicRichText, PrismicText, SliceZone } from '@prismicio/react';

import MenuDropdown from './MenuDropdown';
import MenuDropdownWrapper from './MenuDropdownWrapper';
import LoginDropdown from './LoginDropdown';

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: ${(props) =>
    props.shouldChangeHeaderStyle ? '#ffffff' : 'transparent'};
  z-index: 1000;
`;

const HeaderContainer = styled.div`
  max-width: 1080px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 40px 0;
`;

const LogoMenuWrapper = styled.div`
  display: flex;
`;

const Logo = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.logoImgSrc});
  background-size: 100%;
  margin-right: 8px;
  transition: all 0.3s;
  overflow: hidden;

  &:hover {
    background-image: url(${(props) => props.logoHoverImgSrc});
    background-size: 100%;
  }
`;

const CategoryItemWrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  list-style: none;
`;

const FirstLevelCategoryItem = styled.li.attrs((props) => ({
  tabIndex: 0,
}))`
  display: block;
  position: relative;
  display: flex;
  padding: 12px 0 20px;
  color: #fff;
  font-size: 0.83rem;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.shouldChangeHeaderStyle ? '#1F2E3C' : '#ffffff')};
  padding-bottom: ${(props) => props.shouldChangeHeaderStyle && '36px'};

  a {
    text-decoration: none;
    color: ${(props) =>
      props.shouldChangeHeaderStyle ? '#1F2E3C' : '#ffffff'};
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 16px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${(props) =>
      props.shouldChangeHeaderStyle ? '#dfdfe7' : '#ffffff'};
    transition: width ease-in 0.1s;
  }

  &:after {
    content: '';
    width: ${(props) => (props.shouldShowArrowIcon ? '6px' : '0')};
    height: ${(props) => (props.shouldShowArrowIcon ? '6px' : '0')};
    margin-left: 6px;
    border-style: ${(props) => (props.shouldShowArrowIcon ? 'solid' : 'none')};
    border-width: 1.5px 1.5px 0 0;
    color: ${(props) =>
      props.shouldChangeHeaderStyle ? '#1F2E3C' : '#ffffff'};
    transform: rotate(135deg);
    transition: transform ease-in 0.2s;
  }

  &:hover {
    &:before {
      width: 100%;
    }

    align-items: center;
    &:after {
      transform: rotate(-45deg);
    }
  }
`;

const Button = styled.button`
  background-color: #46b4e9;
  background-image: linear-gradient(#46b4e9, #0070af);
  color: #fff;
  border-radius: 50px;
  border: none;
  padding: 11px 16px;
  box-shadow: 0 2px 3px rgb(0 0 0 / 12%);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #46b4e9;
    background-image: linear-gradient(#46b4e9, #005788);
  }
`;

const Header = ({ navigationData }) => {
  const { headerBgImage, login, logoImage, logoHoverImage, signup, slices } =
    navigationData || {};

  let firstLevel = [];
  let secondLevel = {};
  slices.forEach((slice, index) => {
    if (slice.slice_type === 'first_level_nav_slice') {
      firstLevel.push(slice.primary);
    }

    if (slice.slice_type === 'second_level_nav_slice') {
      const firstLevelIndex = firstLevel.length - 1;

      if (secondLevel[firstLevelIndex]) {
        secondLevel[firstLevelIndex].push({
          primary: slice.primary,
          items: slice.items,
        });
      } else {
        secondLevel[firstLevelIndex] = [];
        secondLevel[firstLevelIndex].push({
          primary: slice.primary,
          items: slice.items,
        });
      }
    }
  });

  const [shouldShowMenuDropdown, setShouldShowMenuDropdown] = useState(false);
  const [hoverMenuIndex, setHoverMenuIndex] = useState(null);

  const menuHoverHandler = (index) => {
    setShouldShowMenuDropdown(true);
    setHoverMenuIndex(index);
  };

  const menuMouseLeaveHandler = () => {
    setShouldShowMenuDropdown(false);
  };

  const signUpBtnHandler = ({ url }) => {
    window.location.href = url;
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shouldChangeHeaderStyle = scrollPosition > 20;

  return (
    <StickyHeader shouldChangeHeaderStyle={shouldChangeHeaderStyle}>
      <HeaderContainer>
        <LogoMenuWrapper>
          <Logo
            as="a"
            href="https://www.edapp.com/"
            logoImgSrc={
              shouldChangeHeaderStyle ? logoHoverImage.url : logoImage.url
            }
            logoHoverImgSrc={logoHoverImage.url}
          />
          <nav>
            <CategoryItemWrapper>
              {firstLevel.map((category, index) => {
                const shouldShowArrowIcon = secondLevel[index];

                return (
                  <>
                    <FirstLevelCategoryItem
                      shouldShowArrowIcon={shouldShowArrowIcon}
                      shouldChangeHeaderStyle={shouldChangeHeaderStyle}
                      onMouseEnter={(e) => menuHoverHandler(index)}
                      onMouseLeave={menuMouseLeaveHandler}
                    >
                      <a href={category?.firstLevelNavLink?.url}>
                        <PrismicText field={category?.firstLevelNavTitle} />
                      </a>
                      {shouldShowMenuDropdown && index === hoverMenuIndex && (
                        <MenuDropdownWrapper>
                          <MenuDropdown listData={secondLevel[index]} />
                        </MenuDropdownWrapper>
                      )}
                    </FirstLevelCategoryItem>
                  </>
                );
              })}
            </CategoryItemWrapper>
          </nav>
        </LogoMenuWrapper>
        <nav>
          <CategoryItemWrapper>
            <FirstLevelCategoryItem
              shouldChangeHeaderStyle={shouldChangeHeaderStyle}
              onMouseEnter={(e) => menuHoverHandler('login')}
              onMouseLeave={menuMouseLeaveHandler}
            >
              <PrismicText field={login[0]?.loginText} />
              {shouldShowMenuDropdown && hoverMenuIndex === 'login' && (
                <MenuDropdownWrapper>
                  <LoginDropdown listData={login[0]} />
                </MenuDropdownWrapper>
              )}
            </FirstLevelCategoryItem>
            <Button
              onClick={(e) =>
                signUpBtnHandler({ url: signup[0]?.signupLink?.url })
              }
            >
              <PrismicText field={signup[0].signupText} />
            </Button>
          </CategoryItemWrapper>
        </nav>
      </HeaderContainer>
    </StickyHeader>
  );
};

export default Header;
