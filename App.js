import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme} from './src/infrastructure/theme';

// statusBar.currentHeight - for Android

import {AuthContextProvider} from './src/services/authentication/auth.context';

import Navigation from './src/infrastructure/navigation/index';

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  </ThemeProvider>
);

export default App;
