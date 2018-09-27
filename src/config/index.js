import app from './app';
import api from './api';
import locales from './locales';
import { routesApp, routesList } from './routes';

const { en } = locales;

export default {
  app,
  api,
  routesList,
  routesApp,
  lang: en,
};
