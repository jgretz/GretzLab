import nodeBits from 'node-bits';
import nodeBitsExpress, {cors, bodyParser, accessControl, fileUpload} from 'node-bits-express';
import nodeBitsCode from 'node-bits-code';
import nodeBitsRest from 'node-bits-rest';
import nodeBitsSpa from 'node-bits-spa';
import nodeBitsPassword from 'node-bits-password';
import nodeBitsJwt from 'node-bits-jwt';
import nodeBitsAdmin, {onImgur} from 'node-bits-admin';
import nodeBitsSql from 'node-bits-sql';

import config from './config';
import adminConfig from './util/admin';
import connectToDatabase from './util/database';
import allowGet from './util/allowGet';

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
      nodeBitsJwt({
        secret: config.JWT_SECRET,
        user: {
          model: 'user',
          key: 'email',
          password: 'password',
        },
        restrict: ['/api'],
        returnData: [
          'email',
        ],
        allowRequestDespiteJwtFailure: allowGet,
      }),
    ],
  }),
  nodeBitsCode({path: __dirname}),
  nodeBitsRest({prefix: 'api'}),
  nodeBitsSql({
    runSeeds: true,
    connection: () => connectToDatabase(),
  }),

  nodeBitsPassword(),

  nodeBitsAdmin({
    models: adminConfig,
    security: {
      username: 'email',
    },
    storage: onImgur({
      clientId: config.IMGUR_CLIENT_ID,
    }),
  }),

  nodeBitsSpa({path: `${__dirname}/site`}),
]);
