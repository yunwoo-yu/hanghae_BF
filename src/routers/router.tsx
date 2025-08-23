import { createBrowserRouter } from 'react-router';
import App from '../App';

export const PATH = {
  HOME: () => '/',
};

const router = createBrowserRouter([
  {
    path: PATH.HOME(),
    element: <App />,
  },
]);

export default router;
