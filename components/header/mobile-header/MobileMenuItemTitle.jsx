import React, { useState } from 'react';
import styled from 'styled-components';
import { PrismicText } from '@prismicio/react';

import MobileMenuDropdown from './MobileMenuDropdown';

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

export default MobileMenuItemTitle;
