import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../store';

const Layout: React.FC = () => {
  const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <React.Fragment>
      <main>
        <Suspense fallback={'loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default Layout;
