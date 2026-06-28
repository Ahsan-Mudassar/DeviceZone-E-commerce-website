import { Link } from "react-router-dom";

function About() {
  return (
    <section className="flex justify-center items-center flex-col px-4 sm:px-8 my-10 sm:my-16">

      <div className="flex justify-center items-center flex-col mb-8 text-center px-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6">
          About Device<span className="text-blue-500">Zone</span>
        </h1>
        <p className="text-blue-700 bg-blue-200 w-fit rounded-xl px-3 py-2 text-sm sm:text-base text-center">
          "Your trusted destination for the latest electronics, accessories, and smart devices."
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8 py-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3 block">
          Our Story
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-5">Who We Are</h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
          DeviceZone is an online electronics store built to provide customers with quality gadgets
          at competitive prices. Our mission is to make shopping simple, secure, and enjoyable by
          offering carefully selected products including smartphones, laptops, tablets, and mobile
          accessories.
        </p>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
          Whether you're upgrading your workspace or buying the latest mobile accessories, DeviceZone
          is committed to delivering reliable products with an excellent shopping experience.
        </p>
      </div>

      <div className="w-full bg-slate-100 border-y border-slate-200 py-10 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "5K+", label: "Happy Customers" },
            { value: "300+", label: "Electronic Products" },
            { value: "120+", label: "Daily Orders" },
            { value: "98%", label: "Customer Satisfaction" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-3xl sm:text-4xl font-bold text-blue-600">{value}</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8 py-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3 block">
          Momentum
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-5">Our Growth</h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Since launching DeviceZone, we've served thousands of satisfied customers and continue to
          expand our collection of premium electronics. Our growing community reflects our dedication
          to quality products, competitive pricing, and outstanding customer service.
        </p>
      </div>

      <div className="text-center pb-16">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-colors duration-200 shadow-sm"
        >
          Go To Shopping →
        </Link>
      </div>

    </section>
  );
}

export default About;