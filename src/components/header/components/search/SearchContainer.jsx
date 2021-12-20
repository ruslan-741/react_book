import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import {
  selectInputValue,
  selectIsSearchOpen,
  setInputValue,
  setIsOpen,
} from './store/searchSlice';

const SearchContainer = () => {
  const isOpen = useSelector(selectIsSearchOpen);
  const inputValue = useSelector(selectInputValue);
  const dispatch = useDispatch();

  const inputHandle = ({ target }) => {
    dispatch(setInputValue(target.value));

    if (target.value.length > 0) {
      dispatch(setIsOpen(true));
    } else {
      dispatch(setIsOpen(false));
    }
  };

  const open = () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput.value.length > 0) {
      dispatch(setIsOpen(true));
    }
  };

  return (
    <Search
      inputValue={inputValue}
      isAutocompleteOpen={isOpen}
      onInput={inputHandle}
      onFocus={open}
    />
  );
};

export default SearchContainer;
