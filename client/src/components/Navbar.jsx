function Navbar({ cartCount }) {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <p className="text-xl font-semibold tracking-tight text-stone-900">
          CornerShop
        </p>
        <nav className="flex gap-4 text-sm text-stone-600">
          <span>Home</span>
          <span>Shop</span>
          <span>
            Cart{cartCount > 0 ? ` (${cartCount})` : ""}
          </span>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
