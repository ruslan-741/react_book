import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavigationLink.module.scss';

const NavigationLink = ({ children, to }) => (
  <NavLink className={styles.link} to={to} activeClassName={styles.active}>
    {children}
  </NavLink>
);

NavigationLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavigationLink;
