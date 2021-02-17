import { RegisterPage} from '../scenes/register';
import { ErrorPage } from '../scenes/error';
import { PrintPage, PrintsPage } from '../scenes/print';

const routes = [
  {
    path: '/',
    component: RegisterPage,
    exact: true
  },
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/print',
    component: PrintsPage
  },
  {
    path: '/customers/:id',
    component: PrintPage
  },
  {
    path: '*',
    component: ErrorPage,
    props: {
      code: 404
    }
  }
];

export default routes;