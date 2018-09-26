import Introduction from '../app/views/introduction';
import Results from '../app/views/results';
import NotFound from '../app/views/not-found';

const routesList = {
  introduction: '/',
  results: '/results',
  notFound: '/not-found',
};

const routesApp = {
  introduction: {
    path: routesList.introduction,
    exact: true,
    main: Introduction,
  },
  results: {
    path: routesList.results,
    exact: true,
    main: Results,
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
