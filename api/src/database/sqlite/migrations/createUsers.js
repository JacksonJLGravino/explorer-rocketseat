const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    avatar VARCHAR NULL,
    created_at TIMESTAMPE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPE DEFAULT CURRENT_TIMESTAMP
  )
`;

module.exports = createUsers;
