import React from 'react';
import styled, { css } from 'styled-components';
import { elevation, transition, colors, black } from 'Utilities';

export const Card = props => {
  return (
    <Paper style={props.style}>
      {props.title && (
        <div>
          <h3>{props.title}</h3>
          <hr />
        </div>
      )}
      <span>{props.children}</span>
    </Paper>
  );
};

const Paper = styled.div`
  background: white;
  border-radius: 5px;
  // color: ${colors.teal};
	color: ${black};
	height: fit-content;
	width: fit-content;
  padding: 15px;
  ${elevation[4]};
  ${transition({})};
  :hover {
    ${elevation[5]};
  }
  ${props =>
    props.sharp &&
    css`
      border-radius: 0px;
    `};
`;
