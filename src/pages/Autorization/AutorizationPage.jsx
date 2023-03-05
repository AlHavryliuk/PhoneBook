import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AutorizationContainer, StyledForm } from './AutorizationPage.styled';
import { userLogin, userRegister } from 'store/authReducer/authOperations';
import { getContacts } from 'store/contactsReducer/contactsOperations';

const AutorizationPage = ({ isLogin }) => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const onSubmit = credential => {
    switch (isLogin) {
      case true:
        dispatch(userLogin(credential))
          .unwrap()
          .then(() => dispatch(getContacts()));
        return 1;
      default:
        const { email, password } = credential;
        dispatch(userRegister(credential))
          .unwrap()
          .then(() => {
            dispatch(userLogin({ email, password }))
              .unwrap()
              .then(() => dispatch(getContacts()));
          });
        reset();
        return;
    }
  };

  return (
    <AutorizationContainer>
      <h2>{isLogin ? `Log in` : `Register`}</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && <input {...register('name')} placeholder="name" />}
        <input {...register('email')} placeholder="e-mail" />
        <input
          type="password"
          {...register('password')}
          placeholder="password"
        />
        <input
          className="form_btn"
          type="submit"
          value={isLogin ? 'Log in' : 'Send'}
        />
      </StyledForm>
    </AutorizationContainer>
  );
};

export default AutorizationPage;
