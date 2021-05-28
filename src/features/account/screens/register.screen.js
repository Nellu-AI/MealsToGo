import React, {useState} from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {Spacer} from '../../../components/spacer/spacerUpgrade.component';
import {Text} from '../../../components/typography/text.component';
import {onRegister} from '../../../redux/reducers/app-reducer';

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  AccountCover,
  Title,
  ErrorContainer,
} from '../screen-styles/styles';

const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const {error, isLoading} = useSelector(state => state.app);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <Spacer size="large" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={setPassword}
        />
        <Spacer size="large" />

        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={setRepeatedPassword}
        />
        <Spacer size="large" />

        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

        <Spacer size="large" />

        {!isLoading ? (
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => dispatch(onRegister(email, password, repeatedPassword))}>
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

export default RegisterScreen;
