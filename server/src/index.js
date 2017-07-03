import nodeBits from 'node-bits';
import nodeBitsExpress, {cors, bodyParser, accessControl, fileUpload} from 'node-bits-express';
import nodeBitsCode from 'node-bits-code';
import nodeBitsRest from 'node-bits-rest';
import nodeBitsSpa from 'node-bits-spa';
import nodeBitsPassword from 'node-bits-password';
import nodeBitsJwt, {secureByRole} from 'node-bits-jwt';
import nodeBitsAdmin, {onDevice} from 'node-bits-admin';
import nodeBitsSql from 'node-bits-sql';
import Sequelize from 'sequelize';

import config from './config';

// import authorizeMap from './authorize_role_map';
// import adminModelConfig from './admin_model_config';

nodeBits([
  nodeBitsExpress({
    port: 4002,
    configurations: [
      accessControl(),
      cors(),
      bodyParser(),
      fileUpload(),
    ],
    hooks: [
      // nodeBitsJwt({
      //   secret: config.JWT_SECRET,
      //   user: {
      //     model: 'user',
      //     key: 'email',
      //     password: 'password',
      //   },
      //   restrict: ['/api'],
      //   returnData: [
      //     'email',
      //     'role',
      //   ],
      //   securitySchemes: [
      //     secureByRole({roleKey: 'role', map: authorizeMap}),
      //   ],
      // }),
    ],
  }),
  nodeBitsCode({path: __dirname}),
  nodeBitsRest({prefix: 'api'}),
  nodeBitsSql({
    connection: () => new Sequelize(config.CONNECTION),
  }),

  nodeBitsPassword(),

  nodeBitsAdmin({
    models: {},
    security: {
      username: 'email',
    },
    storage: onDevice({
      path: `${__dirname}/spa/uploads`,
    }),
  }),

  nodeBitsSpa({path: `${__dirname}/site`}),
]);
