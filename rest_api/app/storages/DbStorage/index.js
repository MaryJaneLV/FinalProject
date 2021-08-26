const pool = require("./db");
const BaseStorage = require("../BaseStorage");

class DbStorage extends BaseStorage {
  constructor(tableName) {
    // if extendint another class then alwasy first need to call "super"
    super(tableName);
    // only after can call "this"
    this._table = tableName;
  }
  async getAll() {
    const [rows] = await pool.promise().execute(`SELECT * FROM ${this._table}`);
    return rows;
  }
  async getById(id) {
    const [rows] = await pool
      .promise()
      .execute(`SELECT * FROM ${this._table} WHERE id = ?`, [id]);

    if(!rows.length) return null
    return rows[0];
  }

  async create(data) {
    const [meta] = await pool
      .promise()
      .query(
        `INSERT INTO ${this._table} SET ?`,
        data
      )
    return Object.assign({}, data, { id: meta.insertId });
  }

  async update(data) {
    const { id } = data;
    if (!id) throw new Error(`Missing "id" in data for DbStorage.update`);

    await pool
      .promise()
      .query('UPDATE ?? SET ? WHERE ?? = ? ',
        [this._table, data, 'id', id]
      )
    return data;
  }
  async delete(id) {
    if (!id) throw new Error(`Missing "id" in data for DbStorage.delete`);
    await pool.promise().execute(`DELETE FROM ${this._table} WHERE id=?`, [id]);
    return;
  }
}

module.exports = DbStorage;
