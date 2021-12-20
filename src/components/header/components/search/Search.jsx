import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';
import SearchInput from './components/search_input';
import Autocomplete from './components/autocomplete';

const Search = ({ isAutocompleteOpen, onInput, inputValue, onFocus }) => (
  <div className={styles.search}>
    <SearchInput onInput={onInput} onFocus={onFocus} value={inputValue} />
    <Autocomplete isOpen={isAutocompleteOpen} inputValue={inputValue} />
  </div>
);

Search.propTypes = {
  isAutocompleteOpen: PropTypes.bool.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};

export default Search;
