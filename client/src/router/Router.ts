import { lazy } from 'react';
import { IRoute } from './IRoute';

type Route = IRoute[];

const StartPage = lazy(() => import('../pages/StartPage'));

export const router: Route = [
  {
    path: '/',
    element: StartPage,
    private: false,
  },
];
