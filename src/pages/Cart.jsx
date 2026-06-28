import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

export default function Cart() {
    const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart()

    const grandTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 mb-20">

            {cartItems.length === 0 ? (
                <div className="text-center py-24">
                    <h4 className="mb-8 text-lg sm:text-xl text-slate-600">Your cart is empty</h4>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-colors duration-200 shadow-sm"
                    >
                        Go To Shopping →
                    </Link>
                </div>
            ) : (
                <>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-6">Your Cart</h2>

                    <div className="flex flex-col gap-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border border-slate-200 rounded-xl shadow-sm p-4 sm:p-5 bg-white"
                            >
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-32 h-32 sm:w-36 sm:h-36 object-contain rounded-lg bg-gray-50 shrink-0"
                                />

                                <div className="flex flex-col flex-1 w-full gap-2">
                                    <div className="flex justify-between items-start gap-2">
                                        <h3 className="text-base sm:text-lg font-semibold text-slate-800 leading-snug">
                                            {item.title}
                                        </h3>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-slate-400 hover:text-red-500 transition-colors shrink-0 mt-0.5"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <g fill="none" fillRule="evenodd">
                                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                                                    <path fill="currentColor" d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zM9 10a1 1 0 0 0-.993.883L8 11v6a1 1 0 0 0 1.993.117L10 17v-6a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m-.72-6H9.72l-.333 1h5.226z" />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>

                                    <p className="text-blue-600 font-semibold text-base">${item.price}</p>

                                    <div className="flex flex-wrap justify-between items-center gap-3 mt-1">
                                        <div className="flex items-center gap-3">
                                            <button
                                                className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-lg font-medium transition-colors"
                                                onClick={() => decreaseQty(item.id)}
                                            >−</button>
                                            <span className="text-base font-semibold w-5 text-center">{item.quantity}</span>
                                            <button
                                                className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-lg font-medium transition-colors"
                                                onClick={() => increaseQty(item.id)}
                                            >+</button>
                                        </div>
                                        <p className="text-slate-700 font-semibold text-sm sm:text-base">
                                            Total: <span className="text-blue-600">${(item.price * item.quantity).toFixed(2)}</span>
                                        </p>
                                    </div>

                                    <button className="mt-3 w-full sm:w-fit inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-sm">
                                        Pay to Proceed
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-right">
                            <p className="text-sm text-slate-500 mb-1">Grand Total</p>
                            <p className="text-2xl font-bold text-blue-600">${grandTotal.toFixed(2)}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}