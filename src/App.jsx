import {
  Routes,
  Route,
} from "react-router-dom";
import {Login} from "./components/auth/Login";
import {FormProduct} from "./components/products/FormProduct";
import {ProductList} from "./components/products/ProductList";
import {AuthProvider} from "./context/authContext";
import {Register} from "./components/auth/Register";
import {ProtectedRoute} from "./services/route-guards";
import {EditProduct} from "./components/products/EditProduct";
import {ShoppingCart} from "./components/products/ShoppingCart";

function App() {
  return (
      <AuthProvider>
          <Routes>
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="/new-product" element={
                      <ProtectedRoute>
                        <FormProduct />
                      </ProtectedRoute>
                  }
              />
              <Route path="/product/:id" element={
                  <ProtectedRoute>
                      <EditProduct />
                  </ProtectedRoute>
              }
              />
              <Route path="/" element={
                  <ProtectedRoute>
                      <ProductList />
                  </ProtectedRoute>
                  } />
              <Route path="/shopping-cart" element={
                  <ProtectedRoute>
                      <ShoppingCart />
                  </ProtectedRoute>
              } />
          </Routes>
      </AuthProvider>
  );
}

export default App
