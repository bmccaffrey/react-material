import React from 'react';
import styled from 'styled-components';
import { StyledLink } from 'Elements';

const AppHeader = () => (
  <Background>
    <h1 style={{ margin: '0', textAlign: 'center', verticalAlign: 'center' }}>
      Design System
    </h1>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/cards">Cards</StyledLink>
  </Background>
);

const Background = styled.div`
  background: cornflowerblue;
  margin-top: 0;
`;

export default AppHeader;
