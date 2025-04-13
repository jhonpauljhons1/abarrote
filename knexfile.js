require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST_DEV,
      database: process.env.DB_NAME_DEV,
      user: process.env.DB_USER_DEV,
      password: process.env.DB_PASS_DEV,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};