import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThemeSwitcher from './ThemeSwitcher';
import { selectThemeName, setThemeName } from '../../../../store/themeSlice';

const ThemeSwitcherContainer = () => {
  const themeName = useSelector(selectThemeName);
  const dispatch = useDispatch();

  const switchThemeName = () => {
    let newThemeName = 'light';

    if (themeName === 'light') {
      newThemeName = 'dark';
    }

    dispatch(setThemeName(newThemeName));
  };

  return <ThemeSwitcher onClick={switchThemeName} />;
};

export default ThemeSwitcherContainer;
