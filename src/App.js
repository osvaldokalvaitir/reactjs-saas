import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <>
        <Routes />
        <GlobalStyle />
      </>
    </Provider>
  );
}

export default App;
