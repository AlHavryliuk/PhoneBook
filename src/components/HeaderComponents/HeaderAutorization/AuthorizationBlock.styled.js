import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthStyled = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledLink = styled(NavLink)`
  padding: 0 30px;
  border-radius: 30px;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  transition: all 0.3s;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &.active {
    background-color: white;
    color: black;
  }

  &:hover {
    background-color: white;
    color: black;
  }
`;


