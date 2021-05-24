import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {View, Text} from 'react-native';

import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';

import {theme} from './src/infrastructure/theme';

import {SafeArea} from './src/components/safeArea/safe-area.component';
// statusBar.currentHeight - for Android

import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';

const MapScreen = () => (
  <SafeArea>
    <Text>Map!</Text>
  </SafeArea>
);

const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings!</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({focused, color, size}) => (
      <Ionicons
        name={focused ? iconName : `${iconName}-outline`}
        size={size}
        color={color}
      />
    ),
  };
};
const App = () => (
  <ThemeProvider theme={theme}>
    <RestaurantsContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </RestaurantsContextProvider>
  </ThemeProvider>
);

export default App;
