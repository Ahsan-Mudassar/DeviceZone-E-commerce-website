import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineTag } from "react-icons/hi2";

function Hero() {
    return (
        <section className="flex flex-col-reverse lg:flex-row justify-between items-center px-5 sm:px-10 lg:px-40 py-12 lg:py-20 gap-10">

            <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left items-center lg:items-start">
                <span className="text-blue-700 bg-blue-200 rounded-xl px-3 py-1 mb-5 text-sm w-fit">
                    ● Welcome to DeviceZone
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight">
                    Upgrade Your{" "}
                    <span className="text-blue-600 block sm:inline mt-1">Digital Life</span>
                </h1>
                <p className="mt-6 max-w-sm sm:max-w-md text-base sm:text-xl opacity-70 leading-relaxed">
                    Discover the latest electronics, top brands, and unbeatable deals — all in one place.
                </p>
                <div className="flex gap-4 mt-8 flex-wrap justify-center lg:justify-start">
                    <Link
                        to="/products"
                        className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-150 ease-in-out text-sm sm:text-base"
                    >
                        <FiShoppingBag />
                        Shop Now
                    </Link>
                    <Link
                        to="/products"
                        className="bg-white border hover:bg-blue-600 hover:text-white flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-150 ease-in-out text-sm sm:text-base"
                    >
                        <HiOutlineTag />
                        Explore Categories
                    </Link>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    className="w-full max-w-xs sm:max-w-sm lg:max-w-full object-contain"
                    src="/laptop_mobile_fixed.png"
                    alt="Electronics"
                />
            </div>

        </section>
    );
}

export default Hero;