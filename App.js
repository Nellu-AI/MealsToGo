import React from 'react';
import {ThemeProvider} from 'styled-components';

import {Provider} from 'react-redux';
import {store, sagaMiddleware} from './src/redux/store';
import {watchAll} from './src/redux/sagas/index';

import {theme} from './src/infrastructure/theme';

// statusBar.currentHeight - for Android

import {AuthContextProvider} from './src/services/authentication/auth.context';

import Navigation from './src/infrastructure/navigation/index';

sagaMiddleware.run(watchAll);

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
