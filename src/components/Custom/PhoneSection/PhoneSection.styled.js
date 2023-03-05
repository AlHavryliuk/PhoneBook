import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  padding: 15px 30px;
  display: flex;

  &:nth-of-type(1) {
    border: 2px solid black;
    color: white;
    border-radius: 10px;
    background: #013b3b;
    position: relative;

    &.disactive {
      &::before {
        content: 'You must be logged in to access your phone book.';
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        font-size: 22px;
        border-radius: 10px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.896);
        z-index: 2;
      }
    }
  }

  //   flex-direction: column;
`;
