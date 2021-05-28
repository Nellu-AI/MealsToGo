import React, {useContext, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import {fetchRestaurants} from '../../../redux/reducers/restaurants-reducer';
import {updateLocation} from '../../../redux/reducers/location-reducer';

import RestaurantInfoCard from '../components/restaurant-info/restaurant-card';
import {SafeArea} from '../../../components/safeArea/safe-area.component';
import Search from '../components/search/search';
import {FavouritesContext} from '../../../services/favourites/favourites.context';

import {FavouritesBar} from '../components/favourites-bar/favourites-bar';
import {Loader} from '../../../components/loader/loader.component';

export const RestaurantsScreen = ({navigation}) => {
  const {location, keyword} = useSelector(state => state.location);
  const {restaurants} = useSelector(state => state.restaurants);
  const {isLoading} = useSelector(state => state.app);
  const dispatch = useDispatch();

  const {favourites} = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      dispatch(fetchRestaurants(locationString));
    }
  }, [dispatch, location]);

  useEffect(() => {
    dispatch(updateLocation(keyword));
  }, [dispatch, keyword]);

  const handleToggleFav = () => {
    setIsToggled(!isToggled);
  };

  return (
    <SafeArea>
      {isLoading && <Loader />}

      <Search onFavouritesToggle={handleToggleFav} isFavouritesToggled={isToggled} />

      {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}

      <FlatList
        data={restaurants}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantDetail', {restaurant: item})}>
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
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
