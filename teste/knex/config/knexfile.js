export default {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'transporte_escolar'
    },
    migrations: {
      directory: '../migrations'
    }
  }
};
