import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { AppHeader } from 'Components';
// import { Card, StyledLink } from 'Elements';
import { CardPage, HomePage } from 'Pages';
import styled from 'styled-components';

const App = () => (
  <Borderless>
    <Router>
      <div>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cards" component={CardPage} />
        </Switch>
      </div>
    </Router>
  </Borderless>
);

const Borderless = styled.div`
  border: 0;
  vw: 100;
  vh: 100;
  height: 100%;
  width: 100%;
`;

export default App;
