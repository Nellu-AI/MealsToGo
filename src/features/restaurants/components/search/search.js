import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';

import {Searchbar} from 'react-native-paper';
import {setKeyword} from '../../../../redux/reducers/location-reducer';

const SearchWrapper = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Search = ({isFavouritesToggled, onFavouritesToggle}) => {
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
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSubmitEditing={onSearch}
      />
    </SearchWrapper>
  );
};

export default Search;
