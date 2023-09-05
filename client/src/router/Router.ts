import { lazy } from 'react';
import { IRoute } from './IRoute';

type Route = IRoute[];

const StartPage = lazy(() => import('../pages/StartPage/StartPage'));
const PresentationPage = lazy(() => import('../pages/PresentationPage/PresentationPage'));
const checkIsAccountPage = lazy(() => import('../pages/checkIsAccountPage/checkIsAccountPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

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
    path: '/isAccount',
    element: checkIsAccountPage,
    private: false,
  },
  {
    path: '/home',
    element: HomePage,
    private: true,
  },
  {
    path: '/notfound',
    element: NotFoundPage,
    private: false,
  },
];
