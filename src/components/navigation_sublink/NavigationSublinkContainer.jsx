import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationSublink from './NavigationSublink';

const NavigationSublinkContainer = ({
  children,
  pathname,
  hash,
  match,
  onClick,
}) => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const currentHash = decodeURI(location.hash);

  const isActive =
    currentPathname === pathname && currentHash === hash && match;

  const scroll = () => {
    const element = document.querySelector(hash);

    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (e) => {
    scroll();
    onClick(e);
  };

  return (
    <NavigationSublink
      pathname={pathname}
      hash={hash}
      isActive={isActive}
      onClick={handleClick}
    >
      {children}
    </NavigationSublink>
  );
};

NavigationSublinkContainer.defaultProps = {
  match: false,
  onClick: () => {},
};

NavigationSublinkContainer.propTypes = {
  children: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  match: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavigationSublinkContainer;
