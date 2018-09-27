import Loadable from 'react-loadable';

const Logo = Loadable({ loader: () => import('./logo'), loading: () => null });
const Form = Loadable({ loader: () => import('./form'), loading: () => null });
const Input = Loadable({ loader: () => import('./input'), loading: () => null });
const TrackThumb = Loadable({ loader: () => import('./track-thumb'), loading: () => null });
const CollectionThumb = Loadable({ loader: () => import('./collection-thumb'), loading: () => null });

export {
  Logo,
  Form,
  Input,
  TrackThumb,
  CollectionThumb,
};
