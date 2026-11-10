import { useState } from "react"
import ProductCard from "./ProductCard"

const products = [
  { id: 1, name: "চা পাতা", price: 120, category: "tea", stock: 25 },
  { id: 2, name: "মধু", price: 350, category: "grocery", stock: 10 },
  { id: 3, name: "বিস্কুট", price: 80, category: "snack", stock: 40 },
  { id: 4, name: "দুধ", price: 90, category: "grocery", stock: 30 },
  { id: 5, name: "কফি", price: 280, category: "tea", stock: 15 },
  { id: 6, name: "চিপস", price: 40, category: "snack", stock: 50 },
  { id: 7, name: "ডিম (১২টা)", price: 160, category: "grocery", stock: 20 },
  { id: 8, name: "সবুজ চা", price: 200, category: "tea", stock: 12 },
  { id: 9, name: "চকলেট", price: 150, category: "snack", stock: 0 },
]

const categories = ["all", "tea", "grocery", "snack"]

function Home({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const visibleProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-10">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          CornerShop
        </h1>
        <p className="mt-3 text-lg text-stone-600">নিজের ছোট দোকান</p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "rounded-md bg-stone-900 px-3 py-1.5 text-sm font-medium text-white"
                : "rounded-md border border-stone-300 bg-white px-3 py-1.5 text-sm font-medium text-stone-700"
            }
          >
            {category === "all" ? "সব" : category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            stock={product.stock}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  )
}

export default Home
