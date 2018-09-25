
const api = {
  local: 'https://itunes.apple.com',
  production: 'https://itunes.apple.com',
};

const define = env => {
  switch (env) {
    case 'development':
      return api.local

    case 'production':
      return api.production

    default:
      return api.production
  }
};

export default {
  environment: process.env.REACT_APP_STAGE,
  url: define( process.env.REACT_APP_STAGE ),
  search: {
    base: '/search',
  }
};
