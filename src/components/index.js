import Loadable from 'react-loadable';

const Logo = Loadable({ loader: () => import('./logo'), loading: () => null });
const Form = Loadable({ loader: () => import('./form'), loading: () => null });
const Input = Loadable({ loader: () => import('./input'), loading: () => null });
const TrackThumb = Loadable({ loader: () => import('./track-thumb'), loading: () => null });
const CollectionThumb = Loadable({ loader: () => import('./collection-thumb'), loading: () => null });
const Chart = Loadable({ loader: () => import('./chart'), loading: () => null });
const ArtistThumb = Loadable({ loader: () => import('./artist-thumb'), loading: () => null }); 

export {
  ArtistThumb,
  Chart,
  Logo,
  Form,
  Input,
  TrackThumb,
  CollectionThumb,
};
