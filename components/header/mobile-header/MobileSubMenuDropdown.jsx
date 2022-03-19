import React from 'react';
import styled from 'styled-components';
import { PrismicText } from '@prismicio/react';

const MobileSubMenuItem = styled.li`
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
      background-color: #e6ebf0;
    }
  }
`;

const MobileSubMenuDropdown = ({ title, link }) => {
  return (
    <MobileSubMenuItem key={link?.url}>
      <a href={link?.url}>
        <PrismicText field={title} />
      </a>
    </MobileSubMenuItem>
  );
};

export default MobileSubMenuDropdown;
