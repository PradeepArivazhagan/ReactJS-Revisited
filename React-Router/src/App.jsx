import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";
import WishList from "./components/WishList";

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductList />} />
          <Route path="list" element={<ProductList />} />
          <Route path="details" element={<ProductDetails />} />
        </Route>
        <Route path="/login/:user" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
