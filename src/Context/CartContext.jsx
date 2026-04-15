import React, { createContext, useState, useEffect } from "react"
export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

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
            setCart([...cart, { ...shoe, size, quantity: 1 }])
        }
    }

    const increaseQty = (id, size) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.size === size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        )
    }

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

    const removeFromCart = (id, size) => {
        setCart(cart.filter((item) => !(item.id === id && item.size === size)))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseQty, decreaseQty }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider