import React from 'react';
import { UserInfo, UserText } from './HeaderUserInfo.styled';
import user from '../../../images/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { select } from 'store/selectors/selectors';
import swal from 'sweetalert';
import { userLogout } from 'store/authReducer/authOperations';

const HeaderUserInfo = () => {
  const userName = useSelector(select.userName);
  const userEmail = useSelector(select.userEmail);
  const dispatch = useDispatch();

  const handleLogout = () => {
    swal({
      title: 'Are you sure?',
      text: 'To access contacts you will need to re-login',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        swal('Successfully', {
          icon: 'success',
        });
        dispatch(userLogout());
      }
    });
  };

  return (
    <>
      <UserInfo>
        <svg width="20px" height="20px">
          <use href={`${user}#icon-user`}></use>
        </svg>
        <UserText>
          <h3>{userName}</h3>
          <h5>{userEmail}</h5>
        </UserText>
      </UserInfo>
      <UserInfo onClick={handleLogout}>Log out</UserInfo>
    </>
  );
};

export default HeaderUserInfo;
