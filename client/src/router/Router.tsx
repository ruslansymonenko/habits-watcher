import React, { Suspense, ReactNode, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import { routes } from './Routes';

import Layout from '../layout/Layout';
import Loader from '../components/Loader/Loader';

export const AppRouter = () => {
  const navigate = useNavigate();

  const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

  const PrivateRoute = ({ children }: { children: ReactNode }): JSX.Element => {
    return isAuth ? <>{children}</> : <Navigate to="/" />;
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    } else if (!isAuth) {
      //isAccount is for test, then it shold be navigate('/');
      navigate('/isAccount');
    }
  }, [isAuth]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        {routes.map((route, index) => {
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
        <Route
          path="/*"
          element={<Navigate to="/notfound" />}
        />
      </Route>
    </Routes>
  );
};
