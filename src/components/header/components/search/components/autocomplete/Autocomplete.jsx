import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Autocomplete.module.scss';
import NavigationSublink from '../../../../../navigation_sublink';

const cn = classNames.bind(styles);

const Autocomplete = React.forwardRef(
  ({ options, isOpen, onLinkClick }, ref) => (
    <div
      className={cn([styles.autocomplete, { [styles.open]: isOpen }])}
      ref={ref}
    >
      {options.map((el) => (
        <NavigationSublink
          key={`${el.pathname}${el.hash}`}
          className={styles.item}
          pathname={el.pathname}
          hash={el.hash}
          onClick={onLinkClick}
        >
          {el.heading}
        </NavigationSublink>
      ))}
      {options.length === 0 && (
        <div className={styles.item}>Ничего не найдено</div>
      )}
    </div>
  )
);

Autocomplete.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      heading: PropTypes.string,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default Autocomplete;
