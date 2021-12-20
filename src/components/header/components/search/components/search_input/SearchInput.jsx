import React from 'react';
import PropTypes from 'prop-types';
import styles from './StyleInput.module.scss';

const SearchInput = ({ onInput, onFocus, value }) => (
  <input
    id="search-input"
    type="text"
    onInput={onInput}
    onFocus={onFocus}
    value={value}
    className={styles.input}
    placeholder="Поиск"
  />
);

SearchInput.propTypes = {
  onInput: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchInput;
