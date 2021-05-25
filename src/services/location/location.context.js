import React, {useState, useEffect} from 'react';

import {locationRequest, locationTransform} from './location.service';

export const LocationContext = React.createContext();

export const LocationContextProvider = ({children}) => {
  const [keyword, setKeyword] = useState('San Francisco');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = searchKeyword => {
    setKeyword(searchKeyword);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!keyword.length) return;
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setLocation(result);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
