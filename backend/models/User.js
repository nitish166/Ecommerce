const queryDB = require("../utils/dbQuery");

const createUser = async (name, email) => {
  const userQuery = "INSERT INTO Users (name, email) VALUES (?, ?)";
  return await queryDB(userQuery, [name, email]);
};

const getUserByEmail = async (email) => {
  const userQuery = "SELECT id FROM Users WHERE email = ?";
  return await queryDB(userQuery, [email]);
};

module.exports = {
  createUser,
  getUserByEmail,
};
