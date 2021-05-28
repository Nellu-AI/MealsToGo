/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components/native';

import {List, Avatar} from 'react-native-paper';

import {useSelector, useDispatch} from 'react-redux';
import {SafeArea} from '../../../components/safeArea/safe-area.component';

import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacerUpgrade.component';
import {onLogout} from '../../../redux/reducers/app-reducer';

const SettingsItem = styled(List.Item)`
  padding: ${props => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.app);
  const logOut = () => dispatch(onLogout());
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={props => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title="Logout"
          left={props => <List.Icon {...props} color="black" icon="door" />}
          onPress={logOut}
        />
      </List.Section>
    </SafeArea>
  );
};
