import Loadable from 'react-loadable';

const Logo = Loadable({ loader: () => import('./logo'), loading: () => null });
const Form = Loadable({ loader: () => import('./form'), loading: () => null });
const Input = Loadable({ loader: () => import('./input'), loading: () => null });

export {
  Logo,
  Form,
  Input,
};
