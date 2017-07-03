import Sequelize from 'sequelize';
import {parse} from 'pg-connection-string';
import config from '../config';

export default () => {
  const dbConnectionString = config.DATABASE_URL;
  const dbConfig = parse(dbConnectionString);

  // wrap it up
  return new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    dialect: 'postgres',
    host: dbConfig.host,
    dialectOptions: {
      ssl: true,
    },

    sync: {
      logging: false,
    },
  });
};
