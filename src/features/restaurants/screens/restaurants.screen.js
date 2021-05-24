import React from 'react';
import styled from 'styled-components/native';

import {FlatList, StyleSheet} from 'react-native';

import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const SearchWrapper = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchWrapper>
      <Searchbar
        placeholder="Search"
        // onChangeText={onChangeSearch}
        // value={searchQuery}
      />
    </SearchWrapper>
    <FlatList
      data={[{name: 1}, {name: 2}]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={item => item.name}
      contentContainerStyle={styles.contentContainer}
    />
  </SafeArea>
);

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
  },
});
