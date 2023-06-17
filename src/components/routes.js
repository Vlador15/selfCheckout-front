import { Home } from '../pages/Home';
import { Error } from '../pages/Error';
import { Payment } from '../pages/Payment';

export const publicRoutes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/payment/:id',
    Component: Payment,
  },
  {
    path: '*',
    Component: Error,
  },
];
