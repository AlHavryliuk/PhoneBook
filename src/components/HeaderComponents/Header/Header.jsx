import React from 'react';

import Container from '../../Custom/Container/Container';
import { CustomHeader, HomeLink } from './Header.styled';
import HeaderAutorization from '../HeaderAutorization/HeaderAutorization';
import { useSelector } from 'react-redux';
import { reselect } from 'store/selectors/selectors';

const Header = () => {
  const authComlete = useSelector(reselect.authenticationComplete);

  return (
    <CustomHeader>
      <Container>
        <HomeLink to={authComlete ? '/contacts' : '/'}>PhoneBook</HomeLink>
        <HeaderAutorization />
      </Container>
    </CustomHeader>
  );
};

export default Header;
