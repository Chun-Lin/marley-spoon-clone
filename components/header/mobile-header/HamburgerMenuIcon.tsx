import React from 'react';
import styled from 'styled-components';

const BarIcon = styled.div`
  width: 24px;
  height: 2px;
  background-color: #ffffff;
`;

const BurgerIconWrapper = styled.div.attrs((props) => ({
  tabIndex: 0,
}))`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-direction: column;
  cursor: pointer;
`;

type HamburgerMenuIconProps = {
  onClick: () => void;
};

const HamburgerMenuIcon: React.FC<HamburgerMenuIconProps> = ({ onClick }) => {
  return (
    <BurgerIconWrapper role="button" onClick={onClick}>
      <BarIcon />
      <BarIcon />
      <BarIcon />
    </BurgerIconWrapper>
  );
};

export default HamburgerMenuIcon;
