import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomHeader = styled.header`
  width: 100%;
  padding: 30px 0;
  background-color: #013b3b;
  display: flex;
  align-items: center;
`;

export const HomeLink = styled(NavLink)`
  color: #fff;
  transition: all 0.3s;

  font-size: 36px;
  text-decoration: none;
  /* text-decoration: underline; */
  &:hover {
    color: black;
  }
`;
