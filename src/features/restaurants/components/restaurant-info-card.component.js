import React from 'react';
import styled from 'styled-components/native';
import {Text, StyleSheet} from 'react-native';

import {Card} from 'react-native-paper';

const RestautantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const RestautantCardCover = styled(Card.Cover)`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${props => props.theme.space[3]};
`;

const Title = styled(Text)`
  padding: ${props => props.theme.space[3]};
  color: ${props => props.theme.colors.ui.primary};
  font-family: ${props => props.theme.fonts.body};
`;

export const RestaurantInfoCard = ({restautant = {}}) => {
  const {
    name = 'Some Restautant',
    icon,
    photos = [
      'https://media-cdn.tripadvisor.com/media/photo-s/14/3e/86/54/caption.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restautant;

  return (
    <RestautantCard elevation={5}>
      <RestautantCardCover key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
    </RestautantCard>
  );
};
