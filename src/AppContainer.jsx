import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import App from './App';
import { selectThemeName, setThemeName } from './store/themeSlice';
import styles from './App.module.scss';

const cn = classNames.bind(styles);

const AppContainer = () => {
  const themeName = useSelector(selectThemeName);
  const dispatch = useDispatch();

  useEffect(() => {
    let newThemeName = 'light';

    if (localStorage.getItem('themeName') !== null) {
      newThemeName = localStorage.getItem('themeName');
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      newThemeName = 'dark';
    }

    dispatch(setThemeName(newThemeName));
  }, [dispatch]);

  return (
    <App className={cn(['app', { 'dark-theme': themeName === 'dark' }])} />
  );
};

export default AppContainer;
