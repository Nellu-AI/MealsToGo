import camelize from 'camelize';
import {mocks, mockImages} from './mock/index';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject(new Error('Not found'));
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({results = []}) => {
  const mappedResults = results.map(restaurant => {
    restaurant.photos = restaurant.photos.map(item => {
      return mockImages[Math.floor(Math.random() * mockImages.length)];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize(mappedResults);
};
