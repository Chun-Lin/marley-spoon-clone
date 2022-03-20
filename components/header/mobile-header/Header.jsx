import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { PrismicRichText, PrismicText, SliceZone } from '@prismicio/react';

import MobileMenuDropdown from './MobileMenuDropdown';
import MobileSubMenuDropdown from './MobileSubMenuDropdown';
import HamburgerMenuIcon from './HamburgerMenuIcon';
import MobileMenuItemTitle from './MobileMenuItemTitle';
import { useScrollPosition } from '../../../hooks';
import { generateMenuLevels } from '../utils';

const StickyHeader = styled.header`
  width: 100vw;
  position: fixed;
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

  const { firstLevel, secondLevel } = useMemo(() => {
    return generateMenuLevels(slices);
  }, [slices]);

  const [shouldShowMenuDropdown, setShouldShowMenuDropdown] = useState(false);
  const [shouldOpenMenu, setShouldOpenMenu] = useState(false);
  const [menuIndex, setMenuIndex] = useState(null);

  const scrollPosition = useScrollPosition();
  const shouldChangeHeaderStyle = scrollPosition > 20;

  const signUpBtnHandler = ({ url }) => {
    window.location.href = url;
  };

  const menuClickHandler = () => {
    setShouldOpenMenu;
  };

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
                  <MobileMenuItemTitle
                    menuData={menuData}
                    subMenuData={secondLevel[index]}
                    key={index}
                  />
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
