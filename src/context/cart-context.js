import {createContext, useContext, useReducer, useState} from "react";
import { cartReducer } from "../reducer";
import axios from "axios";
import { useAuth } from "./auth-context";
import { toast } from "react-toastify";

const CartContext = createContext(null);

const CartProvider = ({children}) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, []);
    const {token: encodedToken} = useAuth();
    const [checkoutDetails, setCheckoutDetails] = useState({
        cartDetails: {},
        address: {
            name: "", 
            state: "",
            city: "", 
            street: "", 
            pincode: ""
        }
    });
    const [order, setOrder] = useState({});

    const getCartData = async() => {
        try{
            const {status, data} = await axios({
                method: "get",
                url: "/api/user/cart",
                headers: {authorization: encodedToken}
            });
            if(status===200){
                cartDispatch({type:"SET_CART", payload: data.cart})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
        }
    }
      
    const addToCart = async(postData) => {
        try{
            const {status, data} = await axios({
                method: "post",
                url: "/api/user/cart",
                data: {product: postData},
                headers: {authorization: encodedToken}
            });
            toast.success("Added to cart");
            if(status===201){
                cartDispatch({type:"SET_CART", payload: data.cart})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
        }
    }
      
    const removeFromCart = async(id) => {
        try{
            const {status, data} = await axios({
                method: "delete",
                url: `/api/user/cart/${id}`,
                headers: {authorization: encodedToken}
            });
            toast.info("Removed from cart");
            if(status===200){
                cartDispatch({type:"SET_CART", payload: data.cart})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
        }
    }

    const clearCart = async(cart) => {
        try {
          for (const item of cart) {
            await axios({
              method: "delete",
              url: `api/user/cart/${item._id}`,
              headers: {authorization: encodedToken}
            });
          }
          cartDispatch({type: "SET_CART", payload: []});
        } catch (error) {
            toast.error(error.response.data.errors[0]);
        }
    }
      
    const updateItemQuantity = async(id, updateType) => {
        try{
            const {status, data} = await axios({
                method: "post",
                url: `/api/user/cart/${id}`,
                data: {action: {type: updateType}},
                headers: {authorization: encodedToken}
            });
            if(status===200){
                cartDispatch({type:"SET_CART", payload: data.cart})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
        }
    }

    return (
        <CartContext.Provider value={{
            cartState, cartDispatch,
            getCartData, addToCart, removeFromCart, clearCart, updateItemQuantity,
            checkoutDetails, setCheckoutDetails,
            order, setOrder
        }}>
            {children}
        </CartContext.Provider>
    );
}

const useCart = () => useContext(CartContext);

export {CartProvider, useCart};