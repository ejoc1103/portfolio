import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  width: 30px;
  grid-area: tog;
  min-width: 30px;
  height: 15px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.primaryColor},
    ${props => props.theme.secondaryColor}
  );
`;

const Notch = styled.div`
  height: 10px;
  width: 10px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${props => (props.isActive ? '16px' : '1px')});
`;
const Toggle = ({ isActive, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};

export default Toggle;
