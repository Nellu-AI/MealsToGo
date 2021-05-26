import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components/native';

import {Searchbar} from 'react-native-paper';
import {LocationContext} from '../../../services/location/location.context';

const SearchWrapper = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Search = ({isFavouritesToggled, onFavouritesToggle}) => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchWrapper>
      <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
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
