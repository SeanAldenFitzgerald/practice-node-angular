const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/shopping-list', (req, res) =>{
  const groceries = [
    'Milk',
    'Eggs',
    'Bread',
    'Butter',
    'Cereal',
  ];
  res.json(groceries);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
