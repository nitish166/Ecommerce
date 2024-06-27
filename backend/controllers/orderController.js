const { createUser, getUserByEmail } = require("../models/User");
const { createOrder } = require("../models/Order");
const { createOrderChair } = require("../models/OrderChair");
const { createOrderTable } = require("../models/OrderTable");
const { createOrderTop } = require("../models/OrderTop");

const checkout = async (req, res) => {
  const { name, email, items, totalAmount } = req.body;

  try {
    // Check if user exists
    let user = await getUserByEmail(email);

    if (user.length > 0) {
      userId = user[0].id;
    } else {
      // Create new user
      user = await createUser(name, email);
      userId = user.insertId;
    }

    // Create order
    const order = await createOrder(totalAmount, userId);
    const orderId = order.insertId;

    // Insert order items
    for (let item of items) {
      if (item.category === "Chairs") {
        await createOrderChair(orderId, item.id);
      } else if (item.category === "Tables") {
        await createOrderTable(orderId, item.id);
      } else if (item.category === "Top") {
        await createOrderTop(orderId, item.id);
      }
    }

    res.send("Order placed successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = {
  checkout,
};
