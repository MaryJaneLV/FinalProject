require("dotenv").config();
const fs = require("fs");
const path = require("path");
const pool = require("./app/storages/DbStorage/db");

const migrationsPath = path.resolve(
  __dirname,
  "./app/storages/DbStorage/migrations"
);
const migrationFiles = fs.readdirSync(migrationsPath).sort();

async function runMigrations() {
  for (let i = 0; migrationFiles[i]; i++) {
    const fileName = migrationFiles[i];
    try {
      const data = fs.readFileSync(`${migrationsPath}/${fileName}`).toString();
      await pool.promise().query(data); //this is asynchronous call
      // will be green
      console.log(`\x1b[32m%s\x1b[0m`, `Migration succesfull: ${fileName}`);
    } catch (err) {
      // will be red
      console.log(`\x1b[31m%s\x1b[0m`, `Migration failed: ${fileName}`);
      console.log(err);
    }
  }
}
runMigrations();