import React, { useState, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './layout/Layout';

import { router } from './router/Router';

function App() {
  const [isAuth, setIsAuth] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {router.map((route, index) => {
            const ReactComponent = route.element;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Suspense>
                    <ReactComponent />
                  </Suspense>
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
