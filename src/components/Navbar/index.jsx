/* eslint-disable import/extensions */
import { Nav, NavUL, NavLI, NavLink } from './style.jsx';

const options = [
  { id: 0, value: 'Home', url: '/' },
  // { id: 1, value: 'Product Detail', url: '/product-detail' },
  { id: 2, value: 'About', url: '/about' }
];

function Navbar() {
  return (
    <Nav>
      <NavUL>
        {options.map((option) => (
          <NavLI key={option.id}>
            <NavLink to={option.url}>{option.value}</NavLink>
          </NavLI>
        ))}
      </NavUL>
    </Nav>
  );
}

export default Navbar;
