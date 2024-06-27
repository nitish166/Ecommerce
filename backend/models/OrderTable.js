const queryDB = require("../utils/dbQuery");

const createOrderTable = async (orderId, tableId) => {
  const orderItemQuery =
    "INSERT INTO Order_Tables (order_id, table_id) VALUES (?, ?)";
  return await queryDB(orderItemQuery, [orderId, tableId]);
};

module.exports = {
  createOrderTable,
};
