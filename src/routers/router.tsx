import { createBrowserRouter, RouterProvider } from 'react-router';

import { Home } from '@/pages/Home';
import { RollingDetail } from '@/pages/RollingDetail';
import { RollingWrite } from '@/pages/RollingWrite';

export const PATH = {
  HOME: () => '/',
  ROLLING_WRITE: () => '/rolling-write',
  ROLLING_DETAIL: () => '/rolling-detail',
};

const router = createBrowserRouter([
  {
    path: PATH.HOME(),
    element: <Home />,
  },
  {
    path: PATH.ROLLING_WRITE(),
    element: <RollingWrite />,
  },
  {
    path: PATH.ROLLING_DETAIL(),
    element: <RollingDetail />,
  },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
