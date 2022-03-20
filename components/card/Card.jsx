import React from 'react';
import styled from 'styled-components';
import { PrismicText } from '@prismicio/react';

const Avatar = styled.img`
  border-radius: 50%;
`;

const CardWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 16px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 12%);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    h6 {
      color: #46b4e9;
    }
  }
`;

const CardTitle = styled.h6`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  color: #1f2e3c;
  transition: color 0.3s;
`;

const Card = ({ avatar, cardTitle, cardLink }) => {
  return (
    <CardWrapper href={cardLink.url}>
      <Avatar src={avatar.url} alt={avatar.alt} width={60} height={60} />
      <CardTitle>
        <PrismicText field={cardTitle} />
      </CardTitle>
    </CardWrapper>
  );
};

export default Card;
