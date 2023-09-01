import React, { useState, Suspense, useEffect, ReactNode } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { router } from './router/Router';

import Layout from './layout/Layout';
import Loader from './components/Loader/Loader';

function App() {
  const isAuth = false;

  const PrivateRoute = ({ children }: { children: ReactNode }): JSX.Element => {
    return isAuth ? <>{children}</> : <Navigate to="/" />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {router.map((route, index) => {
            const AppPage = route.element;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.private ? (
                    <Suspense fallback={<Loader />}>
                      <PrivateRoute>
                        <AppPage />
                      </PrivateRoute>
                    </Suspense>
                  ) : (
                    <Suspense fallback={<Loader />}>
                      <AppPage />
                    </Suspense>
                  )
                }
              />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
