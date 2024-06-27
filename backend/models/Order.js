const queryDB = require("../utils/dbQuery");

const createOrder = async (amount, userId) => {
  const orderQuery =
    "INSERT INTO Orders (amount, user_id, created_at) VALUES (?, ?, NOW())";
  return await queryDB(orderQuery, [amount, userId]);
};

module.exports = {
  createOrder,
};
