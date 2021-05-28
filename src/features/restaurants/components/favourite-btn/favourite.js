import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {addRestaurant, removeRestaurant} from '../../../../redux/reducers/favourites-reducer';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({restaurant}) => {
  const dispatch = useDispatch();
  const {list} = useSelector(state => state.favourites);

  const isFavourite = list.find(r => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? dispatch(addRestaurant(restaurant)) : dispatch(removeRestaurant(restaurant))
      }>
      <Icon
        name={isFavourite ? 'heart' : 'heart-o'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};
