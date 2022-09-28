import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';

import App from 'components/App';
import Loader from 'components/Loader';
import { GlobalStyles } from 'utils/GlobalStyles';

import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>
);
