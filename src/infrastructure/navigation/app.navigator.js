import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {RestaurantsNavigator} from './restaurants.navigator';
import {SettingsNavigator} from './settings.navigator';

import MapScreen from '../../features/map/screens/map.screen';

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
      <Ionicons name={focused ? iconName : `${iconName}-outline`} size={size} color={color} />
    ),
  };
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
