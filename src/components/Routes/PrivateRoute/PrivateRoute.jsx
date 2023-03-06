import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { reselect } from 'store/selectors/selectors';

const PrivateRoute = () => {
  const authComplete = useSelector(reselect.authenticationComplete);
  return authComplete ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
