import {createContext, useContext, useReducer} from "react";
import { productReducer } from "../reducer";
import axios from "axios";

const ProductContext = createContext(null);

const initialState = {
    products:[],
    categories:[],
    filters: {
        sortBy: "FEATURED",
        category: [],
        rating: null,
        priceRange: 25000,
        includeOutOfStock: false,
        searchTerm: ""
    }
};

const ProductProvider = ({children}) => {
    const [productState, productDispatch] = useReducer(productReducer, initialState);

    const getProducts = async() => {
        try{
            const {status, data} = await axios({
                method: "get",
                url: "/api/products"
            });
            if(status===200){
                productDispatch({type:"SET_PRODUCTS", payload: data.products})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
        }
    }

    const getCategories = async() => {
        try{
            const {status, data} = await axios({
                method: "get",
                url: "/api/categories"
            });
            if(status===200){
                productDispatch({type:"SET_CATEGORIES", payload: data.categories})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
        }
    }

    return (
        <ProductContext.Provider value={{
            productState, productDispatch,
            getProducts, getCategories
        }}>
            {children}
        </ProductContext.Provider>
    );
}

const useProducts = () => useContext(ProductContext);

export {ProductProvider, useProducts};