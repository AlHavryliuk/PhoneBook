import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { reselect } from 'store/selectors/selectors';

const PrivateRoute = () => {
  const authComlete = useSelector(reselect.authenticationComplete);

  return authComlete ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
