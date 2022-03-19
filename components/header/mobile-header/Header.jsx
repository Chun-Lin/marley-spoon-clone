import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PrismicRichText, PrismicText, SliceZone } from '@prismicio/react';

import MobileMenuDropdown from './MobileMenuDropdown';
import MobileSubMenuDropdown from './MobileSubMenuDropdown';
import HamburgerMenuIcon from './HamburgerMenuIcon';

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
  padding: 30px;
`;

const SignupMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

const DropdownLayout = styled.nav`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 86px);
  z-index: 1;
  opacity: 1;
  transition: all 0.3s;
  overflow: hidden;
  background-color: #f1f3f6;
  overflow: auto;
  padding-bottom: 10px;
`;

const MobileMenuDropdownWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const MobileMenuTitle = styled.li`
  cursor: pointer;
  border-bottom: 1px solid #d7dfe7;

  a {
    display: flex;
    justify-content: space-between;
    padding: 16px 20px;
    text-decoration: none;
    color: #1f2e3c;

    &:after {
      content: '';
      width: ${(props) => (props.shouldShowArrowIcon ? '6px' : '0')};
      height: ${(props) => (props.shouldShowArrowIcon ? '6px' : '0')};
      margin-left: 6px;
      border-style: ${(props) =>
        props.shouldShowArrowIcon ? 'solid' : 'none'};
      border-width: 1.5px 1.5px 0 0;
      color: #1f2e3c;
      transform: rotate(135deg);
      transition: transform ease-in 0.2s;
    }
  }
`;

const MobileMenuItemTitle = ({ menuData, subMenuData }) => {
  const [shouldShowSubMenu, setShouldShowSubMenu] = useState(false);

  return (
    <MobileMenuTitle shouldShowArrowIcon={subMenuData}>
      <a
        href={menuData?.firstLevelNavLink?.url}
        onClick={() => setShouldShowSubMenu(!shouldShowSubMenu)}
      >
        <PrismicText field={menuData?.firstLevelNavTitle} />
      </a>
      {shouldShowSubMenu && (
        <ul>
          <MobileMenuDropdown listData={subMenuData} />
        </ul>
      )}
    </MobileMenuTitle>
  );
};

const MobileLoginList = styled.li`
  padding: 16px 20px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #1f2e3c;
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
  const [shouldOpenMenu, setShouldOpenMenu] = useState(false);
  const [menuIndex, setMenuIndex] = useState(null);

  const signUpBtnHandler = ({ url }) => {
    window.location.href = url;
  };

  const menuClickHandler = () => {
    setShouldOpenMenu;
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
        <Logo
          as="a"
          href="https://www.edapp.com/"
          logoImgSrc={
            shouldChangeHeaderStyle ? logoHoverImage.url : logoImage.url
          }
          logoHoverImgSrc={logoHoverImage.url}
        />
        <SignupMenuWrapper>
          <nav>
            <CategoryItemWrapper>
              <Button
                onClick={(e) =>
                  signUpBtnHandler({ url: signup[0]?.signupLink?.url })
                }
              >
                <PrismicText field={signup[0].signupText} />
              </Button>
            </CategoryItemWrapper>
          </nav>
          <nav style={{ position: 'relative' }}>
            <HamburgerMenuIcon
              onClick={() => setShouldShowMenuDropdown(!shouldShowMenuDropdown)}
              shouldShowMenuDropdown={shouldShowMenuDropdown}
            />
          </nav>
        </SignupMenuWrapper>
        {shouldShowMenuDropdown && (
          <DropdownLayout>
            <MobileMenuDropdownWrapper>
              {firstLevel.map((menuData, index) => {
                const shouldShowArrowIcon = secondLevel[index];

                return (
                  <>
                    <MobileMenuItemTitle
                      menuData={menuData}
                      subMenuData={secondLevel[index]}
                      key={index}
                    />
                  </>
                );
              })}
              <MobileLoginList>
                <a href={login[0].adminLink?.url}>
                  <PrismicText field={login[0]?.loginText} />
                </a>
              </MobileLoginList>
            </MobileMenuDropdownWrapper>
          </DropdownLayout>
        )}
      </HeaderContainer>
    </StickyHeader>
  );
};

export default Header;
