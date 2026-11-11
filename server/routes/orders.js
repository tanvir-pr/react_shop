const express = require("express")
const fs = require("fs")
const path = require("path")

const router = express.Router()
const ordersPath = path.join(__dirname, "..", "data", "orders.json")

function getOrders() {
  const raw = fs.readFileSync(ordersPath, "utf-8")
  return JSON.parse(raw)
}

function saveOrders(orders) {
  fs.writeFileSync(ordersPath, JSON.stringify(orders, null, 2), "utf-8")
}

router.post("/", (req, res) => {
  const { name, phone, address, items } = req.body || {}

  const orders = getOrders()
  const newOrder = {
    id: orders.length + 1,
    name: name || "",
    phone: phone || "",
    address: address || "",
    items: items || [],
    createdAt: new Date().toISOString(),
  }

  orders.push(newOrder)
  saveOrders(orders)

  res.status(201).json({
    success: true,
    message: "Order created",
    data: newOrder,
  })
})

module.exports = router
