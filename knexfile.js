const path = require("path")

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'host.docker.internal',
      database: 'db',
      user: 'admin',
      password: 'admin',
    },

    pool: {
      min: 1,
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'host.docker.internal',
      database: 'db',
      user: 'admin',
      password: 'admin'
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    }
  }

};