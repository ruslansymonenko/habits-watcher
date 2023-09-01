import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';

const AuthLayout: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Suspense fallback={'loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default AuthLayout;
