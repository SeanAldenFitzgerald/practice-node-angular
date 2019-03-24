'use strict'
require('dotenv').config();
const db = require('../db');
const path = require('path');
const fs = require('fs');

const filename = path.join(__dirname, `${process.argv[2]}.psql`);
fs.access(filename, fs.constants.R_OK, (err) => {
  if (err) {
    console.log(`${filename} is not readable...`);
    throw err;
  } else {
    fs.readFile(filename, async (err2, data) => {
      if (err2) {
        console.log(`${filename} could not be read...`);
        throw err2;
      }
      const result = await db.query(`${data}`);
      if (result.rowCount > 0) {
        console.log(`${filename} successfully loaded ${result.rowCount} rows into ${process.argv[2]}!!!`);
        process.exit(0);
      } else {
        console.log(`${filename} successfully loaded but 0 rows affected...`);
        process.exit(0);
      }
    });
  }
});
