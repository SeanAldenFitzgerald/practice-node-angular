const db = require('../db');

class Groceries {
  static async fetchAll() {
    const { rows } = await db.query('SELECT * FROM public.groceries');
    return rows;
  }
}

module.exports = {
  Groceries,
}
