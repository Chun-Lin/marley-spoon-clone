import styled from 'styled-components';

const MenuDropdownWrapper = styled.ul<{ isSubMenu?: boolean }>`
  list-style: none;
  padding: 0;
  min-width: 240px;
  position: absolute;
  top: ${(props) => (props.isSubMenu ? '0' : '100%')};
  left: ${(props) => (props.isSubMenu ? 'calc(100% - 8px)' : '-16px')};
  color: #1f2e3c;
  background: #fff;
  box-shadow: 0 13px 13px -2px rgb(0 0 0 / 33%);
  transition: all 0.3s;
`;

export default MenuDropdownWrapper;
