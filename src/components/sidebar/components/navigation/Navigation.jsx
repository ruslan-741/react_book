import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import NavigationLink from './navigation_link';
import NavigationSublink from '../../../navigation_sublink';
import styles from './Navigation.module.scss';
import { selectScreens } from '../../../../store/screensSlice';

const cn = classNames.bind(styles);

const Navigation = () => {
  const { pathname } = useLocation();
  const screens = useSelector(selectScreens);

  return (
    <ul className={styles.navigation}>
      {screens.map((el) => (
        <li key={el.path}>
          <NavigationLink to={el.path}>{el.heading}</NavigationLink>
          <ul
            className={cn([
              styles.sublinks,
              {
                [styles['sublinks-active']]: pathname === el.path,
              },
            ])}
          >
            {el.sections.map((section) => (
              <NavigationSublink
                key={section.id}
                hash={`#${section.id}`}
                pathname={el.path}
                match
              >
                {section.heading}
              </NavigationSublink>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
