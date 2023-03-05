import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
`;

export const StyledContactList = styled.div`
  font-size: 24px;
  margin-top: 25px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 1033px;
  padding: 37px 52px 30px 100px;
  background-image: url(https://celes.club/uploads/posts/2022-05/1653499005_2-celes-club-p-fon-list-bumagi-v-kletku-krasivie-2.png);
  background-size: 100%;
  // margin-bottom: 60px;

  & button {
    padding: 0 10px;
    height: 31px;
    background: transparent;
    transition-duration: 0.3s;
    border-radius: 5px;
    font-family: URW Chancery L, cursive;
    font-size: 16px;

    &:hover {
      color: white;
      // background: black;
      background: #013b3b;
    }
  }
`;
