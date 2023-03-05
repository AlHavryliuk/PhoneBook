import styled from 'styled-components';

export const AutorizationContainer = styled.section`
  width: 500px;
  padding: 50px;
  margin: 0 auto;
  background: #013b3b;
  border-radius: 20px;

  & h2 {
    color: white;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  gap: 30px;

  & input {
    font-size: 18px;
    padding: 10px;
  }

  & .form_btn {
    width: 150px;
    border-radius: 20px;
    border: 2px solid white;
    background: transparent;
    color: white;
    transition: all 0.3s;

    &:hover {
      background: white;
      color: black;
    }
  }
`;

