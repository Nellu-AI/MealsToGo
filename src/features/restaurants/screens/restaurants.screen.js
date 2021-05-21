import React from 'react';
import styled from 'styled-components/native';

import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const SearchWrapper = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const ContentWrapper = styled.View`
  flex: 1;
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
    <ContentWrapper>
      <RestaurantInfoCard />
    </ContentWrapper>
  </SafeArea>
);
