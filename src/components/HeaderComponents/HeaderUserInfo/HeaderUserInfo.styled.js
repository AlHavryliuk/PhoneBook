import styled from 'styled-components';

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 5px 60px 5px 10px;
  border-radius: 20px;
  gap: 10px;

  & svg {
    background: white;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
  }

  & h3 {
    color: black;
  }

  &:nth-of-type(2) {
    padding: 0 15px;
    background-color: black;
    color: white;
    border: none;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;

      background-color: white;
      color: black;
    }
  }
`;

export const UserText = styled.div`
  display: flex;
  flex-direction: column;
`;
