import { Navbar, RequireAuth } from "./components";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import {Home, Products, Cart, Wishlist, Login, Signup, Page404} from "./pages";
import Mockman from "mockman-js";
import { useEffect } from "react";
import { useProducts, useCart, useWishlist, useAuth } from "./context";

function App() {
  const {getProducts, getCategories} = useProducts();
  const {getCartData} = useCart();
  const {getWishlistData} = useWishlist();
  const {token} = useAuth();
  
  useEffect(()=>{
    getProducts();
    getCategories();
  },[])
  
  useEffect(()=>{
    if(token){
      getCartData();
      getWishlistData();
    }
  },[token])

  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
          <Route path="/wishlist" element={<RequireAuth><Wishlist /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Page404/>} />
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
    </div>
  );
}

export default App;
