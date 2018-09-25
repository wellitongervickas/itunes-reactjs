import Introduction from '../app/views/introduction';
import NotFound from '../app/views/not-found';

const routesList = {
  introduction: '/',
  notFound: '/not-found',
};

const routesApp = {
  introduction: {
    path: routesList.introduction,
    exact: true,
    main: Introduction,
  },
  notFound: {
    path: routesList.notFound,
    exact: true,
    main: NotFound,
  },
  otherwise: {
    path: '*',
    exact: false,
    main: NotFound,
  },
};

export { routesApp, routesList };
