import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({})

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("cartItems")
        return saved ? JSON.parse(saved) : []
    })


    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])
    const addToCart = (product) => {
        const existItem = cartItems.find((item) => item.id === product.id)

        if (existItem) {
            setCartItems(cartItems.map((item) => item.id === product.id ?
                {
                    ...item,
                    quantity: item.quantity + 1
                } : item
            ))
        } else {
            setCartItems([
                ...cartItems,
                {
                    ...product,
                    quantity: 1
                }
            ])
        };
    }

    const removeFromCart = (id) => {
        setCartItems(
            cartItems.filter((item) => item.id !== id)
        )
    }

    const increaseQty = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item
            )
        )
    }

    const decreaseQty = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity - 1
                    } : item
            ).filter((item) => item.quantity > 0)
        )
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)