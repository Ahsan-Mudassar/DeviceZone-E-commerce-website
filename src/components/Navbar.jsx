import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { cartItems } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/products", label: "Products" },
    ];

    const linkClass = (path) =>
        `block px-3 py-2 rounded-sm transition-all duration-150 ease-in-out hover:bg-blue-600 hover:text-white ${location.pathname === path ? "bg-blue-600 text-white" : ""
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

                <Link to="/">
                    <img src="/devicezone_logo.png" className="h-16 sm:h-20" />
                </Link>

                <ul className="hidden lg:flex gap-5">
                    {navLinks.map(({ to, label }) => (
                        <li key={to}>
                            <Link to={to} className={linkClass(to)}>{label}</Link>
                        </li>
                    ))}
                </ul>

                <Link to="/cart" className="hidden lg:flex items-center gap-1 hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" /><path fill="currentColor" d="M9 20a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M3.495 2.631l.105.07 1.708 1.28a2 2 0 0 1 .653.848l.06.171h12.846a2 2 0 0 1 1.998 2.1l-.013.148-.457 3.655a5 5 0 0 1-4.32 4.34l-.226.023-7.313.61.26 1.124H17.5a1 1 0 0 1 .117 1.993L17.5 19H8.796a2 2 0 0 1-1.906-1.393l-.043-.157-2.74-11.87L2.4 4.3a1 1 0 0 1 .985-1.723zM18.867 7H6.487l1.595 6.906 7.6-.633a3 3 0 0 0 2.728-2.617z" /></g></svg>
                    <span className="text-base font-medium">Cart</span>
                    {totalItems > 0 && (
                        <span className="bg-blue-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {totalItems}
                        </span>
                    )}
                </Link>

                <div className="flex items-center gap-3 lg:hidden">
                    <Link to="/cart" className="relative hover:text-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" /><path fill="currentColor" d="M9 20a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M3.495 2.631l.105.07 1.708 1.28a2 2 0 0 1 .653.848l.06.171h12.846a2 2 0 0 1 1.998 2.1l-.013.148-.457 3.655a5 5 0 0 1-4.32 4.34l-.226.023-7.313.61.26 1.124H17.5a1 1 0 0 1 .117 1.993L17.5 19H8.796a2 2 0 0 1-1.906-1.393l-.043-.157-2.74-11.87L2.4 4.3a1 1 0 0 1 .985-1.723zM18.867 7H6.487l1.595 6.906 7.6-.633a3 3 0 0 0 2.728-2.617z" /></g></svg>
                        {totalItems > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-md hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden bg-white border-t border-slate-100 px-4 pb-4 shadow-md">
                    <ul className="flex flex-col gap-1 mt-2">
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <Link
                                    to={to}
                                    className={linkClass(to)}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}