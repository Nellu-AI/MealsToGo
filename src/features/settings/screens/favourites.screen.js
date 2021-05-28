import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, FlatList} from 'react-native';

import {useSelector} from 'react-redux';
import {SafeArea} from '../../../components/safeArea/safe-area.component';
import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';

import RestaurantInfoCard from '../../restaurants/components/restaurant-info/restaurant-card';

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const FavouritesScreen = ({navigation}) => {
  const favourites = useSelector(state => state.favourites.list);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantDetail', {restaurant: item})}>
            <RestaurantInfoCard restaurant={item} />
            <Spacer position="bottom" size="large" />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
