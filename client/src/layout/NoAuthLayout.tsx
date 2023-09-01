import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const NoAuthLayout: React.FC = () => {
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

export default NoAuthLayout;
