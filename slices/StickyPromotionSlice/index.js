import React, { useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import styled from 'styled-components';

const Popover = styled.div`
  position: fixed;
  right: 1%;
  bottom: 4%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  z-index: 500;
  box-shadow: 0 1px 5px rgb(0 0 0 / 12%);
  max-height: 500px;
  transition: max-height 0.2s ease-in-out;
`;

const PopoverWrapper = styled.div`
  max-width: 300px;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const PromoTitleWrapper = styled.h4`
  padding: 16px 0;
  font-size: 21px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  line-height: 1.34em;
`;

const CtaButton = styled.button`
  max-width: 90%;
  padding: 6px 18px;
  border-radius: 5px;
  background-color: #46b4e9;
  background-image: linear-gradient(#46b4e9, #0070af);
  color: #fff;
  font-size: 1.16rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  line-height: 1.6;

  &:hover {
    background-color: #46b4e9;
    background-image: linear-gradient(#46b4e9, #005788);
  }
`;

const IconCross = styled.i`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    top: 0px;
    left: 16px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(135deg);
  }
`;

const StickyPromotionSlice = ({ slice }) => {
  const {
    primary: { bgImage, ctaLink, ctaText, promoTitle },
  } = slice || {};

  const [shouldShowPopover, setShouldShowPopover] = useState(true);

  const ctaBtnClickHandler = (event) => {
    window.location.href = ctaLink.url;
  };

  if (!shouldShowPopover) {
    return null;
  }

  return (
    <Popover bgImage={bgImage.url}>
      <PopoverWrapper>
        <IconCross role="img" onClick={() => setShouldShowPopover(false)} />
        <PromoTitleWrapper>
          <PrismicRichText field={promoTitle} />
        </PromoTitleWrapper>
        <CtaButton onClick={ctaBtnClickHandler}>
          <PrismicRichText field={ctaText} />
        </CtaButton>
      </PopoverWrapper>
    </Popover>
  );
};

export default StickyPromotionSlice;
