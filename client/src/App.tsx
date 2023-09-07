import React from 'react';

import { AppRouter } from './router/Router';

import { AppStyles } from './App.styled';

function App() {
  return (
    <>
      <AppStyles />

      <div className="App">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
