'use strict'
require('dotenv').config();
const db = require('../db');

module.exports.up = async function (next) {
  await db.query(`CREATE TABLE public.groceries (
    id SERIAL,
    name TEXT,
      CONSTRAINT groceries_pk PRIMARY KEY (id),
      CONSTRAINT groceries_name_ui UNIQUE (name)
  )`);
  next();
}

module.exports.down = async function (next) {
  await db.query(`DROP TABLE public.groceries`);
  next();
}
