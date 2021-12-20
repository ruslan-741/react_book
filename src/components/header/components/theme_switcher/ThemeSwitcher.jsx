import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = ({ onClick }) => (
  <button type="button" className={styles.switcher} onClick={onClick}>
    Сменить тему
  </button>
);

ThemeSwitcher.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
