import React, { Suspense, ReactNode } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { router } from './router/Router';

import Layout from './layout/Layout';
import Loader from './components/Loader/Loader';

import { AppStyles } from './App.styled';

function App() {
  //Here temporary replacement for registration check
  const isAuth = true;

  const PrivateRoute = ({ children }: { children: ReactNode }): JSX.Element => {
    return isAuth ? <>{children}</> : <Navigate to="/" />;
  };

  return (
    <>
      <AppStyles />

      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
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
            <Route
              path="/*"
              element={<Navigate to="/notfound" />}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
