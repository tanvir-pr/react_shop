import { useState } from "react"
import CheckoutForm from "./components/CheckoutForm"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {
  const [cart, setCart] = useState([])

  function addToCart(product, qty) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id)

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + qty }
            : item
        )
      }

      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          qty,
        },
      ]
    })
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar cartCount={cartCount} />
      <Home onAddToCart={addToCart} />
      <CheckoutForm />
      <Footer />
    </div>
  )
}

export default App
