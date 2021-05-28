import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import AppNavigator from './app.navigator';
import {AccountNavigator} from './account.navigator';
import {setLoading, setUser} from '../../redux/reducers/app-reducer';

const Navigation = () => {
  const dispatch = useDispatch();
  const {user, isLoading} = useSelector(state => state.app);
  const isAuth = !!user;

  useEffect(() => {
    const onAuthStateChanged = userData => {
      dispatch(setUser(userData));
      if (isLoading) dispatch(setLoading(false));
    };
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>{isAuth ? <AppNavigator /> : <AccountNavigator />}</NavigationContainer>
  );
};

export default Navigation;
