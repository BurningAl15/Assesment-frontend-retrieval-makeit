import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  max-width: calc(100% - 30px);
  padding: 15px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
`;

export const NavUL = styled.ul`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

export const NavLI = styled.li`
  list-style: none;
`;

export const NavLink = styled(Link).attrs(() => ({ tabIndex: 0 }))`
  text-decoration: none;
  color: black;
  font-size: 18px;
  cursor: pointer;
  padding-bottom: 5px;
  transition: all 0.1s ease;

  &:hover {
    font-weight: bold;
    border-bottom: 2.5px solid #d5a100;
  }
`;
