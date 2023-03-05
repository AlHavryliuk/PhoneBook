import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { reselect } from 'store/selectors/selectors';

const PublicRoute = () => {
  const authComlete = useSelector(reselect.authenticationComplete);
    return authComlete ? <Navigate to="/contacts" /> : <Outlet />;
};

export default PublicRoute;
