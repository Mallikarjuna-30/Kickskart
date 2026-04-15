import React, { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        phone: "",
        address: "",
    })

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const isFormValid =
        form.name && form.phone && form.address && cart.length > 0

    const handleOrder = () => {
        if (!isFormValid) {
            alert("Please fill all details")
            return
        }

        alert("Order placed successfully! 🎉")
        clearCart()
        navigate("/order-success", { state: { cart, total } })
    }

    return (
        <div className="p-6 md:flex gap-8 bg-gray-100 min-h-screen">

            {/* LEFT: ADDRESS FORM */}
            <div className="md:w-2/3 bg-white p-6 rounded-xl shadow">
                <h1 className="text-2xl font-bold mb-6">Checkout</h1>

                <div className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full border p-3 rounded"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full border p-3 rounded"
                        value={form.phone}
                        onChange={handleChange}
                    />

                    <textarea
                        name="address"
                        placeholder="Full Address"
                        rows="4"
                        className="w-full border p-3 rounded"
                        value={form.address}
                        onChange={handleChange}
                    />
                </div>

                {/* PAYMENT METHOD */}
                <div className="mt-6">
                    <h2 className="font-semibold mb-2">Payment Method</h2>
                    <div className="border p-3 rounded bg-gray-50">
                        Cash on Delivery (Demo)
                    </div>
                </div>
            </div>

            {/* RIGHT: ORDER SUMMARY */}
            <div className="md:w-1/3 bg-white p-6 rounded-xl shadow h-fit">
                <h2 className="text-xl font-bold mb-4">
                    Order Summary ({cart.length} items)
                </h2>

                <div className="space-y-3 max-h-60 overflow-y-auto">
                    {cart.map((item) => (
                        <div
                            key={`${item.id}-${item.size}`}
                            className="flex justify-between text-sm"
                        >
                            <p>
                                {item.name} (x{item.quantity})
                            </p>
                            <p>₹{item.price * item.quantity}</p>
                        </div>
                    ))}
                </div>

                <hr className="my-4" />

                <h2 className="text-lg font-bold">Total: ₹{total}</h2>

                <button
                    onClick={handleOrder}
                    disabled={!isFormValid}
                    className={`mt-4 w-full py-3 rounded-lg text-white font-semibold transition
            ${isFormValid
                            ? "bg-black hover:bg-gray-800"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                >
                    Place Order
                </button>
            </div>
        </div>
    )
}

export default Checkout