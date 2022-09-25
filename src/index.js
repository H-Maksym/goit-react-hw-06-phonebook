import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'components/App';

import { GlobalStyles } from 'utils/GlobalStyles';

import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/Theme';

import { store } from 'redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
