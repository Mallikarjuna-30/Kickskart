import React, { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    // Load from localStorage
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    // ➕ Add to Cart
    const addToCart = (shoe, size) => {
        const itemExists = cart.find(
            (item) => item.id === shoe.id && item.size === size
        )

        if (itemExists) {
            setCart(
                cart.map((item) =>
                    item.id === shoe.id && item.size === size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            )
        } else {
            // ✅ Apply discount here
            const discountedPrice = Math.round(
                shoe.price - (shoe.price * shoe.discount) / 100
            )

            setCart([
                ...cart,
                {
                    ...shoe,
                    price: discountedPrice,       // final price
                    originalPrice: shoe.price,    // original price
                    size,
                    quantity: 1
                }
            ])
        }
    }

    // ➕ Increase Quantity
    const increaseQty = (id, size) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.size === size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        )
    }

    // ➖ Decrease Quantity
    const decreaseQty = (id, size) => {
        setCart(
            cart
                .map((item) =>
                    item.id === id && item.size === size
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        )
    }

    // ❌ Remove Item
    const removeFromCart = (id, size) => {
        setCart(cart.filter((item) => !(item.id === id && item.size === size)))
    }

    // 🧹 Clear Cart
    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseQty,
                decreaseQty
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider