import { useContext } from 'react';
import { ThemeContext } from '../../hooks/ThemeContext';
import { FooterContainer } from './style';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return <FooterContainer className={theme}>By Aldhair Vera</FooterContainer>;
}

export default Footer;
