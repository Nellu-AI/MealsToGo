import React from 'react';
import {ThemeProvider} from 'styled-components';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import {theme} from './src/infrastructure/theme';

// statusBar.currentHeight - for Android

import Navigation from './src/infrastructure/navigation/index';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  </Provider>
);

export default App;
