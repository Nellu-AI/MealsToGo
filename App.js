import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme} from './src/infrastructure/theme';

// statusBar.currentHeight - for Android

import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {FavouritesContextProvider} from './src/services/favourites/favourites.context';

import Navigation from './src/infrastructure/navigation/index';

const App = () => (
  <ThemeProvider theme={theme}>
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation />
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  </ThemeProvider>
);

export default App;
