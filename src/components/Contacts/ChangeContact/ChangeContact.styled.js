import styled from 'styled-components';

export const ChangePopup = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background: #013b3b;
  text-align: center;
`;

export const ChangePopupBody = styled.div`
  padding: 50px;
  background: #fff;
`;

export const CustomChangeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & label {
    font-size: 20px;
    color: #013b3b;
    font-weight: bold;
  }

  & input {
    padding: 10px;
    font-size: 18px;

    &:nth-of-type(1) {
      outline: none;
    }
  }

  & button {
    background: #013b3b;
    padding: 10px;
    font-size: 18px;
    color: white;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      color: #013b3b;
      background: #fff;
    }
  }
`;
