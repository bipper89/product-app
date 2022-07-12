import { useState } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import {Login} from "./components/auth/Login";
import {FormProduct} from "./components/products/FormProduct";
import {ProductList} from "./components/products/ProductList";

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/new-product" element={<FormProduct />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
  )
}

export default App
