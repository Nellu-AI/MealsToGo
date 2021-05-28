import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import Search from '../components/search.component';
import MapCallout from '../components/map-callout.component';
import {Loader} from '../../../components/loader/loader.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = ({navigation}) => {
  const {restaurants} = useSelector(state => state.restaurants);
  const {location} = useSelector(state => state.location);
  const {isLoading} = useSelector(state => state.app);

  const [latDelta, setLatDelta] = useState(0);
  const {lat, lng, viewport} = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const delta = northeastLat - southwestLat;
    setLatDelta(delta);
  }, [location, viewport]);

  return (
    <>
      <Search />
      {isLoading && <Loader />}
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}>
        {restaurants.map(restaurant => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}>
              <MapView.Callout
                onPress={() => navigation.navigate('RestaurantDetail', {restaurant})}>
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};

export default MapScreen;
