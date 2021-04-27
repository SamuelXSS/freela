import React, { useContext } from 'react';

import Loading from '../components/Loading';

import { Context } from '../contexts/Auth/AuthContext';

import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';

const Routes = () => {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <Loading />;
  }
  return <AppRoutes />;
  return authenticated ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
