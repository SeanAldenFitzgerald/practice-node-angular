require('dotenv').config();
const express = require('express');
const migrate = require('migrate');
const path = require('path');
const { Groceries } = require('./models/groceries');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/shopping-list', async (req, res) => {
  const groceries = await Groceries.fetchAll();
  res.json(groceries);
});

migrate.load({
  stateStore: path.join(__dirname, '.migrate'),
  migrationsDirectory: path.join(__dirname, 'migrations'),
}, (err, set) => {
  if (err) { throw err; }
  set.up((err2) => {
    if (err2) { throw err2; }
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  })
});
