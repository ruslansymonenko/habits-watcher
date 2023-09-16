import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { AppDispatch } from './store';
import { AppRouter } from './router/Router';
import { checkIsAuth, getUser } from './store/slices/userSlices/authSlice';

import { AppStyles } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isAuth: boolean = useSelector(checkIsAuth);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <AppStyles />

      <div className="App">
        <AppRouter isAuth={isAuth} />
      </div>

      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
