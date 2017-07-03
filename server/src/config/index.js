const mode = process.env.NODE_ENV;
const config = {};

if (mode === 'PRODUCTION') {
  config.CONNECTION = process.env.CONNECTION;
  config.JWT_SECRET = process.env.JWT_SECRET;
} else {
  const local = require('./local');
  config.CONNECTION = local.default.CONNECTION;
  config.JWT_SECRET = local.default.JWT_SECRET;
}

export default config;
