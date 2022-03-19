import React from 'react';
import { PrismicText } from '@prismicio/react';
import styled from 'styled-components';

const SubMenuItem = styled.li`
  position: relative;

  a {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #1f2e3c;
    font-size: 16px;
    font-weight: 300;

    &:after {
      display: none;
    }
  }

  &:hover {
    background-color: #e6ebf0;
  }
`;

const SubMenuDropdown = ({ title, link }) => {
  return (
    <SubMenuItem key={link?.url}>
      <a href={link?.url}>
        <PrismicText field={title} />
      </a>
    </SubMenuItem>
  );
};

export default SubMenuDropdown;
