import { Navbar, RequireAuth } from "./components";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import {Home, Products, Cart, Wishlist, Login, Signup, Page404, Checkout, OrderSummary} from "./pages";
import Mockman from "mockman-js";
import { useEffect } from "react";
import { useProducts, useCart, useWishlist, useAuth, useAddress } from "./context";
import {useScrollToTop} from "./hooks/useScrollToTop";

function App() {
  const {getProducts, getCategories} = useProducts();
  const {getCartData, setCheckoutDetails} = useCart();
  const {getWishlistData} = useWishlist();
  const {getAddressData, addressState} = useAddress();
  const {token} = useAuth();

  useScrollToTop();
  
  useEffect(()=>{
    getProducts();
    getCategories();
  },[])
  
  useEffect(()=>{
    if(token){
      getCartData();
      getWishlistData();
      getAddressData();
      
    }
  },[token])

  useEffect(()=>{
    setCheckoutDetails(prev=>({...prev, address: addressState[0] ?? []}))
  },[addressState])

  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route element={<RequireAuth/>}>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/order_summary" element={<OrderSummary/>}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Page404/>} />
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
    </div>
  );
}

export default App;
