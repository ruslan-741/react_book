import React from 'react';
import Navigation from './components/navigation';
import styles from './Sidebar.module.scss';

const Sidebar = () => (
  <div className={styles.sidebar}>
    <Navigation />
  </div>
);

export default Sidebar;
