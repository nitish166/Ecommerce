const queryDB = require("../utils/dbQuery");

const createOrderChair = async (orderId, chairId) => {
  const orderItemQuery =
    "INSERT INTO Order_Chairs (order_id, chair_id) VALUES (?, ?)";
  return await queryDB(orderItemQuery, [orderId, chairId]);
};

module.exports = {
  createOrderChair,
};
