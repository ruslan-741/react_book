import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ name, id }) => (
  <h2 className={styles.section} id={id}>
    {name}
  </h2>
);

Section.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Section;
