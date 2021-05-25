import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components/native';

import {Searchbar} from 'react-native-paper';
import {LocationContext} from '../../../services/location/location.context';

const SearchWrapper = styled.View`
  padding: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
`;

const Search = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchWrapper>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword); // либо useCallback, либо метод классового компон.
        }}
      />
    </SearchWrapper>
  );
};

export default Search;
