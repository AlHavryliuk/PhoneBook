import { AuthStyled, StyledLink } from './AuthorizationBlock.styled';

import { reselect } from 'store/selectors/selectors';
import { useSelector } from 'react-redux';
import HeaderUserInfo from '../HeaderUserInfo/HeaderUserInfo';

const HeaderAutorization = () => {
  const authComplete = useSelector(reselect.authenticationComplete);

  return (
    <AuthStyled>
      {authComplete ? (
        <HeaderUserInfo />
      ) : (
        <>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </>
      )}
    </AuthStyled>
  );
};

export default HeaderAutorization;
