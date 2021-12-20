import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paragraph.module.scss';

const Paragraph = ({ children }) => (
  <p className={styles.paragraph}>{children}</p>
);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
