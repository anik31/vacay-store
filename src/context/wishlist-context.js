import {createContext, useContext, useReducer} from "react";
import { wishlistReducer } from "../reducer";
import axios from "axios";
import { useAuth } from "./auth-context";
import { toast } from "react-toastify";

const WishlistContext = createContext(null);

const WishlistProvider = ({children}) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, []);
    const {token: encodedToken} = useAuth();

    const getWishlistData = async() => {
        try{
            const {status, data} = await axios({
                method: "get",
                url: "/api/user/wishlist",
                headers: {authorization: encodedToken}
            });
            if(status===200){
                wishlistDispatch({type:"SET_WISHLIST", payload: data.wishlist})
            }
        }catch(err){
            console.error(err);
        }
    }
  
    const addToWishlist = async(postData) => {
        try{
            const {status, data} = await axios({
                method: "post",
                url: "/api/user/wishlist",
                data: {product: postData},
                headers: {authorization: encodedToken}
            });
            toast.success("Added to wishlist");
            if(status===201){
                wishlistDispatch({type:"SET_WISHLIST", payload: data.wishlist})
            }
        }catch(err){
            console.error(err);
        }
    }
  
    const removeFromWishlist = async(id) => {
        try{
            const {status, data} = await axios({
                method: "delete",
                url: `/api/user/wishlist/${id}`,
                headers: {authorization: encodedToken}
            });
            toast.info("Removed from wishlist");
            if(status===200){
                wishlistDispatch({type:"SET_WISHLIST", payload: data.wishlist})
            }
        }catch(err){
            console.error(err);
        }
    }

    return (
        <WishlistContext.Provider value={{
            wishlistState, wishlistDispatch, 
            getWishlistData, addToWishlist, removeFromWishlist
        }}>
            {children}
        </WishlistContext.Provider>
    );
}

const useWishlist = () => useContext(WishlistContext);

export {WishlistProvider, useWishlist};