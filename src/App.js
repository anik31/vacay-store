import { Navbar } from "./components";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import {Home, Products} from "./pages";
import Mockman from "mockman-js";
import {useAsyncFetch} from "./hooks/useAsyncFetch";

function App() {
  
  useAsyncFetch({
    url:"/api/products",
    dispatchType:"SET_PRODUCTS",
    dispatchPayload:"products"
  });

  useAsyncFetch({
      url:"/api/categories",
      dispatchType:"SET_CATEGORIES",
      dispatchPayload:"categories"
  });

  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
    </div>
  );
}

export default App;
