import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext} from '../../services/authentication/auth.context';
import AppNavigator from './app.navigator';
import {AccountNavigator} from './account.navigator';

const Navigation = () => {
  const {isAuth} = useContext(AuthContext);
  return (
    <NavigationContainer>{isAuth ? <AppNavigator /> : <AccountNavigator />}</NavigationContainer>
  );
};

export default Navigation;
