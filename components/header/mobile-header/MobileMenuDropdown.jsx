import React from 'react';
import styled from 'styled-components';
import { PrismicText } from '@prismicio/react';

import MobileSubMenuDropdown from './MobileSubMenuDropdown';

const MobileSubMenuDropdownWrapper = styled.ul`
  padding-left: 16px;
`;

const MenuDropdownItem = styled.li`
  position: relative;

  a {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #1f2e3c;
    font-size: 16px;
    font-weight: 300;

    &:after {
      display: none;
    }

    &:hover {
      background-color: ${(props) =>
        props.shouldShowArrowIcon ? 'none' : '#e6ebf0'};
    }
  }
`;

const MobileMenuDropdown = ({ listData }) => {
  if (!listData) {
    return null;
  }

  return listData.map((category, index) => {
    const { items, primary } = category || {};
    const shouldShowSubMenu = items?.[0].thirdLevelNavTitle?.length > 0;

    return (
      <MenuDropdownItem>
        <a href={primary?.secondLevelNavLink?.url}>
          <PrismicText field={primary?.secondLevelNavTitle} />
        </a>

        {shouldShowSubMenu && (
          <MobileSubMenuDropdownWrapper>
            {items.map((item, index) => {
              const { thirdLevelNavLink, thirdLevelNavTitle } = item || {};

              return (
                <MobileSubMenuDropdown
                  title={thirdLevelNavTitle}
                  link={thirdLevelNavLink}
                />
              );
            })}
          </MobileSubMenuDropdownWrapper>
        )}
      </MenuDropdownItem>
    );
  });
};

export default MobileMenuDropdown;
