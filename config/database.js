module.exports = {
  dbPool: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECTSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};