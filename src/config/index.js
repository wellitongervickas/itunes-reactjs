import app from './app';
import api from './api';
import locales from './locales';
import { routesApp, routesList } from './routes';
import storage from './storage';
import errors from './errors'

const { ptBr } = locales;

export default {
  errors,
  app,
  api,
  storage,
  routesList,
  routesApp,
  lang: ptBr,
};
