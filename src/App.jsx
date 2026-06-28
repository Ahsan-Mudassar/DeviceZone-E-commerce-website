
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import About from "./pages/About"
import Home from "./pages/Home.jsx";

import { CartProvider } from './context/CartContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
