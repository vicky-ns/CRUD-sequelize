// database congiguration
// Author: vickybaskae7@gmail.com
// Date: 23 Mar, 2022.
// database application used : postgres

module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'password',
  DB: 'crudsequelize',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    accquire: 30000,
    idle: 10000
  }
};