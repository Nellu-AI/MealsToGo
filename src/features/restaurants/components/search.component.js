import React, {useContext, useState} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/native';

import {Searchbar} from 'react-native-paper';
import {LocationContext} from '../../../services/location/location.context';

const SearchWrapper = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Search = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchWrapper>
      <Searchbar
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
