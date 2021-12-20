import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Sidebar from './components/sidebar';
import Header from './components/header';
import styles from './App.module.scss';
import routes from './router';

const App = ({ className }) => (
  <div className={className}>
    <Router>
      <Header />

      <Container fluid className={styles.container}>
        <Row>
          <Col xs={{ span: 7, offset: 1 }}>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Redirect to="/hardware" />}
              />
              {routes.map((el) => (
                <Route key={el.path} path={el.path} component={el.component} />
              ))}
            </Switch>
          </Col>

          <Col xs={{ span: 3, offset: 1 }}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </Router>
  </div>
);

App.defaultProps = {
  className: '',
};

App.propTypes = {
  className: PropTypes.string,
};

export default App;
