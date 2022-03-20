import React, { useState } from 'react';
import { PrismicRichText, PrismicText, SliceZone } from '@prismicio/react';
import styled from 'styled-components';

import SubMenuDropdown from './SubMenuDropdown';
import MenuDropdownWrapper from './MenuDropdownWrapper';

const MenuDropdownItem = styled.li`
  position: relative;

  && {
    a {
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
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

const MenuDropdown = ({ listData }) => {
  const [isHoverOnMenuItem, setIsHoverOnMenuItem] = useState(false);
  const [hoverMenuIndex, setHoverMenuIndex] = useState(null);

  if (!listData) {
    return null;
  }

  return listData.map((category, index) => {
    const { items, primary } = category || {};
    const hasSubMenuItems = items?.[0].thirdLevelNavTitle?.length > 0;

    const menuHoverHandler = () => {
      setIsHoverOnMenuItem(true);
      setHoverMenuIndex(index);
    };

    const menuMouseLeaveHandler = () => {
      setIsHoverOnMenuItem(false);
    };

    const shouldShowSubMenu =
      hasSubMenuItems && isHoverOnMenuItem && index === hoverMenuIndex;

    return (
      <MenuDropdownItem
        shouldShowArrowIcon={hasSubMenuItems}
        onMouseEnter={menuHoverHandler}
        onMouseLeave={menuMouseLeaveHandler}
        key={index}
      >
        <a href={primary?.secondLevelNavLink?.url}>
          <PrismicText field={primary?.secondLevelNavTitle} />
        </a>

        {shouldShowSubMenu && (
          <MenuDropdownWrapper isSubMenu={true}>
            {items.map((item, index) => {
              const { thirdLevelNavLink, thirdLevelNavTitle } = item || {};

              return (
                <SubMenuDropdown
                  title={thirdLevelNavTitle}
                  link={thirdLevelNavLink}
                  key={index}
                />
              );
            })}
          </MenuDropdownWrapper>
        )}
      </MenuDropdownItem>
    );
  });
};

export default MenuDropdown;
