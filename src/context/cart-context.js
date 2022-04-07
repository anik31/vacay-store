import {createContext, useContext, useReducer} from "react";
import { cartReducer } from "../reducer";
import axios from "axios";
import { useAuth } from "./auth-context";

const CartContext = createContext(null);

const CartProvider = ({children}) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, []);
    const {token: encodedToken} = useAuth();

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
        }catch(err){
            console.error(err);
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
            if(status===201){
                cartDispatch({type:"SET_CART", payload: data.cart})
            }
        }catch(err){
            console.error(err);
        }
    }
      
    const removeFromCart = async(id) => {
        try{
            const {status, data} = await axios({
                method: "delete",
                url: `/api/user/cart/${id}`,
                headers: {authorization: encodedToken}
            });
            if(status===200){
                cartDispatch({type:"SET_CART", payload: data.cart})
            }
        }catch(err){
            console.error(err);
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
        }catch(err){
            console.error(err);
        }
    }
      

    return (
        <CartContext.Provider value={{
            cartState, cartDispatch,
            getCartData, addToCart, removeFromCart, updateItemQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
}

const useCart = () => useContext(CartContext);

export {CartProvider, useCart};