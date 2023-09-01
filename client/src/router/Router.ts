import { lazy } from 'react';
import { IRoute } from './IRoute';

type Route = IRoute[];

const StartPage = lazy(() => import('../pages/StartPage/StartPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const router: Route = [
  {
    path: '/',
    element: StartPage,
    private: false,
  },
  {
    path: '/home',
    element: HomePage,
    private: true,
  },
];
