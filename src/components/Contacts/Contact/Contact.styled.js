import styled from 'styled-components';

export const StyledLi = styled.li`
  width: auto;
  display: grid;
  gap: 30px;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: 30px 1fr 0.8fr 1fr 0.7fr;

  & span:nth-of-type(3) {
    text-align: center;
  }

  & input {
    border: none;
    background: transparent;
  }
`;
