// ORM 
// Author: vickybaskae7@gmail.com
// Date: 23 Mar, 2022.

const database = require("../config/database");
const Sequelize = require("sequelize");
const DataTypes = require("sequelize");

// Database connection
const seq = new Sequelize(database.DB, database.USER, database.PASSWORD, {
  host: database.HOST,
  dialect: database.dialect,
  operatorAliases: false,

  pool: {
    max: database.pool.max,
    min: database.pool.min,
    accquire: database.pool.accquire,
    idle: database.pool.idle,
  },
});

// Authentication 
seq
  .authenticate()
  .then(() => {
    console.log("authenticate successfully");
  })
  .catch((err) => {
    console.log(err);
  })

// Initalize 
const DB = {};
DB.Sequelize = Sequelize;
DB.sequelize = seq;

// Executes the new table
DB.employe = require("./employe")(seq, DataTypes);
// Table synchronization
DB.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done");
});


module.exports = DB;