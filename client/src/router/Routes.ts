import { lazy } from 'react';
export interface IRoute {
  path: string;
  element: React.LazyExoticComponent<React.FC>;
  private: boolean;
}

type Route = IRoute[];

const StartPage = lazy(() => import('../pages/StartPage/StartPage'));
const PresentationPage = lazy(() => import('../pages/PresentationPage/PresentationPage'));

const CheckIsAccountPage = lazy(() => import('../pages/CheckIsAccountPage/CheckIsAccountPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const HabitsPage = lazy(() => import('../pages/HabitsPage/HabitsPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage/SettingsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const routes: Route = [
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
    element: CheckIsAccountPage,
    private: false,
  },
  {
    path: '/login',
    element: LoginPage,
    private: false,
  },
  {
    path: '/register',
    element: RegisterPage,
    private: false,
  },
  {
    path: '/home',
    element: HomePage,
    private: true,
  },
  {
    path: '/profile',
    element: ProfilePage,
    private: true,
  },
  {
    path: '/settings',
    element: SettingsPage,
    private: true,
  },
  {
    path: '/habits',
    element: HabitsPage,
    private: true,
  },
  {
    path: '/notfound',
    element: NotFoundPage,
    private: false,
  },
];
