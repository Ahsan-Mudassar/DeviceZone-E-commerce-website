import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import Spinner from "../components/Spinner"
import Search from "../components/Search"
import NotFound from "./NotFound"
import { useLocation } from "react-router-dom"

const allowed_category = ["smartphones", "mobile-accessories", "laptops", "tablets"]

const categories = [
    { label: "All Products", value: "" },
    { label: "Smart Phones", value: "smartphones" },
    { label: "Accessories", value: "mobile-accessories" },
    { label: "Laptops", value: "laptops" },
    { label: "Tablets", value: "tablets" },
]

export default function Products() {
    const [category, setCategory] = useState("")
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('')

    const location = useLocation()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let url = category === ""
                    ? "https://dummyjson.com/products?limit=0"
                    : `https://dummyjson.com/products/category/${category}`

                let res = await fetch(url)
                let data = await res.json()

                if (category === "") {
                    setProducts(data.products.filter(p => allowed_category.includes(p.category)))
                } else {
                    setProducts(data.products)
                }
            } catch (err) {
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [category])

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className="max-w-6xl mx-auto px-4">

            {location.pathname === "/products" && (
                <Search query={query} setQuery={setQuery} />
            )}

            <div className="flex flex-wrap gap-2 justify-center my-5 px-2">
                <span className="bg-blue-700 text-white px-3 py-2 rounded-3xl text-sm font-medium flex items-center">
                    Category
                </span>
                {categories.map(({ label, value }) => (
                    <button
                        key={value}
                        onClick={() => setCategory(value)}
                        className={`border px-3 py-2 rounded-3xl text-sm transition-all duration-150 ease-in-out cursor-pointer
                            ${category === value
                                ? "bg-blue-800 text-white border-blue-800"
                                : "hover:bg-blue-800 hover:text-white border-slate-300"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="flex justify-center items-center my-10">
                    <Spinner />
                </div>
            ) : filteredProducts.length === 0 ? (
                <div className="flex justify-center items-center my-10">
                    <NotFound />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-20">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    )
}