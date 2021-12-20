import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDetectClickOutside } from 'react-detect-click-outside';
import Autocomplete from './Autocomplete';
import { selectScreens } from '../../../../../../store/screensSlice';
import { setInputValue, setIsOpen } from '../../store/searchSlice';

const AutocompleteContainer = ({ isOpen, inputValue }) => {
  const screens = useSelector(selectScreens);
  const dispatch = useDispatch();
  let options = [];

  screens.forEach((el) => {
    const newOptions = el.sections.map((screen) => ({
      pathname: el.path,
      hash: `#${screen.id}`,
      heading: screen.heading,
    }));

    options = options.concat(newOptions);
  });

  const close = () => {
    dispatch(setIsOpen(false));
  };

  const hadnleLinkClick = () => {
    close();
    dispatch(setInputValue(''));
  };

  const ref = useDetectClickOutside({
    onTriggered: ({ target }) => {
      if (target.id !== 'search-input') {
        close();
      }
    },
  });

  const filteredOptions = options.filter(
    (el) =>
      inputValue.length > 0 &&
      el.heading.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  return (
    <Autocomplete
      isOpen={isOpen}
      options={filteredOptions}
      ref={ref}
      onLinkClick={hadnleLinkClick}
    />
  );
};

AutocompleteContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default AutocompleteContainer;
