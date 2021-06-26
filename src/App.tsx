import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes';
import './styles/reset.css';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Switch>
            <Routes />
          </Switch>
        </AppProvider>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};

export default App;
