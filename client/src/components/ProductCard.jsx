import { useState } from "react"

function ProductCard({ id, name, price, category, stock, onAddToCart }) {
  const [qty, setQty] = useState(1)
  const inStock = stock > 0

  function decrease() {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  function increase() {
    if (qty < stock) {
      setQty(qty + 1)
    }
  }

  function handleAdd() {
    onAddToCart({ id, name, price }, qty)
  }

  return (
    <article className="rounded-lg border border-stone-200 bg-white p-4 text-left shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
        {category}
      </p>
      <h2 className="mt-1 text-lg font-semibold text-stone-900">{name}</h2>
      <p className="mt-2 text-base text-stone-700">৳{price}</p>

      {inStock ? (
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={decrease}
              className="h-8 w-8 rounded-md border border-stone-300 text-stone-800"
            >
              −
            </button>
            <span className="min-w-6 text-center text-sm font-medium text-stone-900">
              {qty}
            </span>
            <button
              type="button"
              onClick={increase}
              className="h-8 w-8 rounded-md border border-stone-300 text-stone-800"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="w-full rounded-md bg-stone-900 px-3 py-2 text-sm font-medium text-white"
          >
            Add to cart
          </button>
        </div>
      ) : (
        <p className="mt-4 text-sm font-medium text-red-600">স্টক শেষ</p>
      )}
    </article>
  )
}

export default ProductCard
