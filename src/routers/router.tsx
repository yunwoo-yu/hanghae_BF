import { createBrowserRouter, RouterProvider } from 'react-router';
import { Home } from '../pages/Home';

export const PATH = {
  HOME: () => '/',
};

const router = createBrowserRouter([
  {
    path: PATH.HOME(),
    element: <Home />,
  },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
