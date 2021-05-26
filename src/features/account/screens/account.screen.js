/* eslint-disable global-require */
import React from 'react';
import LottieView from 'lottie-react-native';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from '../screen-styles/styles';

import {Spacer} from '../../../components/spacer/spacerUpgrade.component';

const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          source={require('../../../../assets/watermelon.json')}
          autoPlay
          loop
          resizeMode="cover"
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate('Login')}>
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton icon="email" mode="contained" onPress={() => navigation.navigate('Register')}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
