import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {Platform} from 'react-native';
import {RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen';
import RestaurantDetail from '../../features/restaurants/screens/restaurantDetail.screen';

const RestaurantStack = createStackNavigator();

// eslint-disable-next-line import/prefer-default-export
export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={
        Platform.OS === 'ios' && {
          ...TransitionPresets.ModalPresentationIOS,
        }
      }>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
