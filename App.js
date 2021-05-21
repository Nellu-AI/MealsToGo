import React from 'react';
import {ThemeProvider} from 'styled-components';

import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';

import {theme} from './src/infrastructure/theme';

// StatusBar.currentHeight - for Android

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
};

export default App;
