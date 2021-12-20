import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Section from './Section';
import { addSection, selectScreens } from '../../store/screensSlice';

const SectionContainer = ({ children }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const screens = useSelector(selectScreens);

  useEffect(() => {
    const screen = screens.find((el) => el.path === pathname);
    console.dir(screen);
    if (screen.sections.findIndex((el) => el.heading === children) === -1) {
      dispatch(
        addSection({
          path: pathname,
          sectionHeading: children,
        })
      );
    }
  }, [dispatch, children, pathname, screens]);

  return <Section name={children} id={children} />;
};

SectionContainer.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionContainer;
