import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {FlatList, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {SafeArea} from '../../../components/safeArea/safe-area.component';
import {Search} from '../components/search.component';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

const LoaderWrapper = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
export const RestaurantsScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoaderWrapper>
          <Loading animating={true} color="#2182BD" size={50} />
        </LoaderWrapper>
      )}

      <Search />

      <FlatList
        data={restaurants}
        renderItem={({item}) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
  },
});
