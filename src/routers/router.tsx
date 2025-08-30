import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { Error } from '@/components/Error';
import { HobbySelect } from '@/pages/HobbySelect';
import { Login } from '@/pages/Login';
import { NotFound } from '@/pages/NotFound';
import { ResultDetail } from '@/pages/ResultDetail';
import { ResultHome } from '@/pages/ResultHome';
import { RollingList } from '@/pages/RollingList';
import { Splash } from '@/pages/Splash';
import { Survey } from '@/pages/Survey';

export const PATH = {
  SPLASH: () => '/',
  LOGIN: () => '/login',
  ROLLING_LIST: () => `/rolling-list/:id`,
  RESULT_HOME: () => '/result',
  RESULT_DETAIL: () => '/result/:id',
  SURVEY: () => '/survey',
  HOBBY_SELECT: () => '/hobby-select',
  NOT_FOUND: () => '*',
};

const router = createBrowserRouter([
  {
    path: PATH.ROLLING_LIST(),
    element: (
      <ErrorBoundary fallback={<Error />}>
        <RollingList />
      </ErrorBoundary>
    ),
  },
  {
    path: PATH.RESULT_HOME(),
    element: (
      <ErrorBoundary fallback={<Error />}>
        <ResultHome />
      </ErrorBoundary>
    ),
  },
  {
    path: PATH.RESULT_DETAIL(),
    element: (
      <ErrorBoundary fallback={<Error />}>
        <ResultDetail />
      </ErrorBoundary>
    ),
  },
  { path: PATH.SPLASH(), element: <Splash /> },
  { path: PATH.LOGIN(), element: <Login /> },
  { path: PATH.SURVEY(), element: <Survey /> },
  { path: PATH.HOBBY_SELECT(), element: <HobbySelect /> },
  { path: PATH.NOT_FOUND(), element: <NotFound /> },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
