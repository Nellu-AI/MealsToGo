import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';

import {useSelector, useDispatch} from 'react-redux';
import {Searchbar} from 'react-native-paper';
import {setKeyword} from '../../../redux/reducers/location-reducer';

const SearchWrapper = styled.View`
  padding: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
`;

const Search = () => {
  const dispatch = useDispatch();
  const {keyword} = useSelector(state => state.location);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  const onSearch = useCallback(() => {
    dispatch(setKeyword(searchKeyword));
  }, [dispatch, searchKeyword]);

  return (
    <SearchWrapper>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSubmitEditing={onSearch}
      />
    </SearchWrapper>
  );
};

export default Search;
