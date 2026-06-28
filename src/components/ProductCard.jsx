import { useCart } from "../context/CartContext";
import { FaStar } from 'react-icons/fa';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="rounded-lg shadow-md bg-gray-100 flex flex-col overflow-hidden">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 sm:h-52 object-contain bg-gray-100"
            />
            <div className="bg-white flex flex-col flex-1 p-3">
                <h3 className="text-sm sm:text-base font-semibold text-slate-800 line-clamp-2 min-h-[2.8rem]">
                    {product.title}
                </h3>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-blue-600 font-bold text-base">
                        ${product.price}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                        <span>{Math.round(product.rating)}.0</span>
                        <FaStar size={14} className="text-yellow-400" />
                    </div>
                </div>
                <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-150"
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}