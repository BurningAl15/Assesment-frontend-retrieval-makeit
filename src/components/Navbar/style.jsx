import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: relative;
  max-width: calc(100% - 30px);
  padding: 15px;
  &.light {
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  }
  &.dark {
    border-bottom: 2px solid rgba(255, 255, 255, 0.582);
  }
`;

export const ThemeButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 20px;
  svg {
    width: 30px;
    height: 30px;
  }

  &.light {
    svg {
      fill: #d5a100;
      filter: drop-shadow(0px 0px 7px #d5a100);
    }
  }
  &.dark {
    svg {
      fill: #ccccccba;
      filter: drop-shadow(0px 0px 2px #ccccccba);
    }
  }
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
  font-size: 18px;
  cursor: pointer;
  padding-bottom: 5px;
  transition: all 0.1s ease;
  &.light {
    color: #222222;
  }
  &.dark {
    color: #ffffff;
  }

  &:hover {
    font-weight: bold;
    border-bottom: 2.5px solid #d5a100;
  }
`;
