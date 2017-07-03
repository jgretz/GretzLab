import _ from 'lodash';

const mode = process.env.NODE_ENV;

const props = ['DATABASE_URL', 'JWT_SECRET', 'IMGUR_CLIENT_ID'];
const source = mode === 'PRODUCTION' ? process.env : require('./local').default;

const config = {};
_.forEach(props, prop => {
  config[prop] = source[prop];
});

export default config;
