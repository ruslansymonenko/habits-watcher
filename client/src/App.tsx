import React from 'react';
import { ToastContainer } from 'react-toastify';

import { AppRouter } from './router/Router';

import { AppStyles } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppStyles />

      <div className="App">
        <AppRouter />
      </div>

      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
