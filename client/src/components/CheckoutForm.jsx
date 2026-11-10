import { useState } from "react"

function CheckoutForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-12">
      <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-stone-900">Checkout</h2>
        <p className="mt-1 text-sm text-stone-500">
          আজ শুধু ফর্ম — অর্ডার সেভ দিন ১৩-এ
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="block text-sm text-stone-700">
            নাম
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900"
              placeholder="আপনার নাম"
            />
          </label>

          <label className="block text-sm text-stone-700">
            ফোন
            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900"
              placeholder="01XXXXXXXXX"
            />
          </label>

          <label className="block text-sm text-stone-700">
            ঠিকানা
            <textarea
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              rows={3}
              className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900"
              placeholder="ডেলিভারি ঠিকানা"
            />
          </label>

          <button
            type="submit"
            className="rounded-md bg-stone-900 px-4 py-2 text-sm font-medium text-white"
          >
            Place order
          </button>
        </form>

        <div className="mt-6 rounded-md bg-stone-50 p-4 text-sm text-stone-700">
          <p className="font-medium text-stone-900">এখন state-এ আছে:</p>
          <p className="mt-2">নাম: {name || "—"}</p>
          <p>ফোন: {phone || "—"}</p>
          <p>ঠিকানা: {address || "—"}</p>
        </div>
      </div>
    </section>
  )
}

export default CheckoutForm
