const express = require("express")
const fs = require("fs")
const path = require("path")

const router = express.Router()

function getProducts() {
  const filePath = path.join(__dirname, "..", "data", "products.json")
  const raw = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(raw)
}

router.get("/", (req, res) => {
  let products = getProducts()
  const { category } = req.query

  if (category) {
    products = products.filter((product) => product.category === category)
  }

  res.json({
    success: true,
    message: category ? `Products in category: ${category}` : "Product list",
    data: products,
  })
})

router.get("/:id", (req, res) => {
  const products = getProducts()
  const id = Number(req.params.id)
  const product = products.find((item) => item.id === id)

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
      data: null,
    })
  }

  res.json({
    success: true,
    message: "Product detail",
    data: product,
  })
})

module.exports = router
