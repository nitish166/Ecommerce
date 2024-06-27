const queryDB = require("../utils/dbQuery");

const createOrderTop = async (orderId, topId) => {
  const orderItemQuery =
    "INSERT INTO Order_Tops (order_id, top_id) VALUES (?, ?)";
  return await queryDB(orderItemQuery, [orderId, topId]);
};

module.exports = {
  createOrderTop,
};
