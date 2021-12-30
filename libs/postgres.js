const { Client } = require("pg");

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'carlos',
    password: 'Enya8101',
    database: 'my_store'
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
