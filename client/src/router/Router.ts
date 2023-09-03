import { lazy } from 'react';
import { IRoute } from './IRoute';

type Route = IRoute[];

const StartPage = lazy(() => import('../pages/StartPage/StartPage'));
const PresentationPage = lazy(() => import('../pages/PresentationPage/PresentationPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const router: Route = [
  {
    path: '/',
    element: StartPage,
    private: false,
  },
  {
    path: '/presentation',
    element: PresentationPage,
    private: false,
  },
  {
    path: '/home',
    element: HomePage,
    private: true,
  },
];
