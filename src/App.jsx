/* eslint-disable import/no-unresolved */
import './App.css';
import { useContext } from 'react';
import CustomRouter from './helpers/custom-router';
import { AppContainer } from './pages/styles/style';
import { ThemeContext } from './hooks/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <AppContainer className={theme}>
      <CustomRouter />
    </AppContainer>
  );
}

export default App;
