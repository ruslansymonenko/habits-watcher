import React, { Suspense, ReactNode, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { checkIsAuth } from '../store/slices/userSlices/authSlice';
import { routes } from './Routes';

import Layout from '../layout/Layout';
import Loader from '../components/Loader/Loader';

interface IAppRouterProps {
  isAuth: boolean;
}

export const AppRouter = ({ isAuth }: IAppRouterProps) => {
  const navigate = useNavigate();

  const PrivateRoute = ({ children }: { children: ReactNode }): JSX.Element => {
    return isAuth ? <>{children}</> : <Navigate to="/" />;
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    } else if (!isAuth) {
      navigate('/');
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
