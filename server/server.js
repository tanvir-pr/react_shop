const express = require("express")
const cors = require("cors")
const logger = require("./middleware/logger")
const productsRouter = require("./routes/products")
const ordersRouter = require("./routes/orders")

const app = express()
const PORT = 5000

// Middleware order: cors → json → logger → routes
app.use(cors())
app.use(express.json())
app.use(logger)

app.get("/", (req, res) => {
  res.send("Hello from Express")
})

app.use("/api/products", productsRouter)
app.use("/api/orders", ordersRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
