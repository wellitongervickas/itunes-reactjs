import Loadable from 'react-loadable';

const Logo = Loadable({ loader: () => import('./logo'), loading: () => null });

export {
  Logo
};
