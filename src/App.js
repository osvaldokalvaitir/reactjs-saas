import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <>
        <Routes />
        <ReduxToastr />
        <GlobalStyle />
      </>
    </Provider>
  );
}

export default App;
