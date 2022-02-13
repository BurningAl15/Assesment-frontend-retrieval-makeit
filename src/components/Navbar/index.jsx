/* eslint-disable import/extensions */
import { useContext } from 'react';
import { RiLightbulbFill, RiLightbulbFlashFill } from 'react-icons/ri';
import { Nav, NavUL, NavLI, NavLink, ThemeButton } from './style.jsx';
import { ThemeContext } from '../../hooks/ThemeContext';

const options = [
  { id: 0, value: 'Home', url: '/' },
  // { id: 1, value: 'Product Detail', url: '/product-detail' },
  { id: 2, value: 'About', url: '/about' }
];

function Navbar() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <Nav className={theme}>
      <ThemeButton className={theme} onClick={() => changeTheme()}>
        {theme === 'dark' ? <RiLightbulbFill /> : <RiLightbulbFlashFill />}
      </ThemeButton>
      <NavUL>
        {options.map((option) => (
          <NavLI key={option.id}>
            <NavLink className={theme} to={option.url}>
              {option.value}
            </NavLink>
          </NavLI>
        ))}
      </NavUL>
    </Nav>
  );
}

export default Navbar;
