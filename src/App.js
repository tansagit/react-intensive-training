import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ProductList from "./pages/ProductList";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderResult from "./pages/OrderResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />}></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/order-result" element={<OrderResult />}></Route>
    </Routes>
  );
}

export default App;
