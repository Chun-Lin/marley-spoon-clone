import styled from 'styled-components';

const BlockQuote = styled.blockquote<{ color?: string }>`
  position: relative;
  font-size: 1.33rem;
  line-height: 1.25em;
  font-weight: 300;
  margin-left: 60px;
  text-align: left;

  &:before {
    position: absolute;
    content: '“';
    font-size: 120px;
    top: 0;
    left: 0;
    line-height: 0.8;
    font-weight: 300;
    vertical-align: middle;
    left: -60px;
    color: ${(props) => (props.color ? props.color : '#e6ebf0')};
  }
`;

export default BlockQuote;
