import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ThemeSwitcher from './components/theme_switcher';
import styles from './Header.module.scss';
import Search from './components/search';

const Header = () => (
  <header className={styles.header}>
    <Container fluid className={styles.container}>
      <Row className={styles.row}>
        <Col className={styles['search-wrapper']} xs={{ span: 2, offset: 8 }}>
          <Search />
        </Col>

        <Col xs={{ span: 2 }}>
          <ThemeSwitcher />
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
