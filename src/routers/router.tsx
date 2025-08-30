import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { Error } from '@/components/Error';
import { HobbySelect } from '@/pages/HobbySelect';
import { Home } from '@/pages/Home';
import { ResultDetail } from '@/pages/ResultDetail';
import { ResultHome } from '@/pages/ResultHome';
import { RollingList } from '@/pages/RollingList';
import { Survey } from '@/pages/Survey';

export const PATH = {
  HOME: () => '/',
  ROLLING_LIST: () => `/rolling-list/:id`,
  RESULT_HOME: () => '/result',
  RESULT_DETAIL: () => '/result/:id',
  SURVEY: () => '/survey',
  HOBBY_SELECT: () => '/hobby-select',
};

const router = createBrowserRouter([
  {
    path: PATH.HOME(),
    element: <Home />,
  },
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
  { path: PATH.SURVEY(), element: <Survey /> },
  { path: PATH.HOBBY_SELECT(), element: <HobbySelect /> },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
