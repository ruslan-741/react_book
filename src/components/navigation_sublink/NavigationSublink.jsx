import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavigationSublink.module.scss';

const cn = classNames.bind(styles);

const NavigationSublink = ({
  children,
  hash,
  pathname,
  isActive,
  onClick,
  className,
}) => (
  <Link
    className={cn([
      styles.sublink,
      className,
      {
        [styles.active]: isActive,
      },
    ])}
    to={{
      pathname,
      hash,
    }}
    onClick={onClick}
  >
    {children}
  </Link>
);

NavigationSublink.defaultProps = {
  onClick: () => {},
  className: '',
};

NavigationSublink.propTypes = {
  children: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default NavigationSublink;
