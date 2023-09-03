import React from 'react';

import AuthenticatedLayout from './AuthLayout';
import NoAuthLayout from './NoAuthLayout';

const Layout: React.FC = () => {
  const isAuth = false;

  return isAuth ? <AuthenticatedLayout /> : <NoAuthLayout />;
};

export default Layout;
