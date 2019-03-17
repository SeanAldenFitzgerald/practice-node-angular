require('dotenv').config()
const express = require('express');
const { Groceries } = require('./models/groceries');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/shopping-list', async (req, res) => {
  const groceries = await Groceries.fetchAll();
  res.json(groceries);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
