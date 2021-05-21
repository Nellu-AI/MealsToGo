import React from 'react';
import styled from 'styled-components/native';
import {Card} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';

import {Image, View} from 'react-native';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {Spacer} from '../../../components/spacer/spacer.component';

const RestautantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const RestautantCardCover = styled(Card.Cover)`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${props => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

const Title = styled.Text`
  color: ${props => props.theme.colors.ui.primary};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.body};
`;

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const ClosedLabel = styled.Text`
  color: ${props => props.theme.colors.text.error};
`;

export const RestaurantInfoCard = ({restautant = {}}) => {
  const {
    name = 'Some Restautant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://media-cdn.tripadvisor.com/media/photo-s/14/3e/86/54/caption.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restautant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArray);
  return (
    <RestautantCard elevation={5}>
      <RestautantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Title>{name}</Title>

        <Section>
          <Rating>
            {ratingArray.map((el, indx) => (
              <SvgXml key={indx} xml={star} width={20} height={20} />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <ClosedLabel>CLOSED TEMPORARILY</ClosedLabel>
            )}

            <Spacer variant="left.large" />

            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}

            <Spacer variant="left.large" />

            <Image style={{width: 15, height: 15}} source={{uri: icon}} />
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestautantCard>
  );
};
