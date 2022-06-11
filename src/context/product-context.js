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
    },
    isProductsLoading: false,
    isCategoriesLoading: false
};

const ProductProvider = ({children}) => {
    const [productState, productDispatch] = useReducer(productReducer, initialState);

    const getProducts = async() => {
        try{
            productDispatch({type:"SET_PRODUCTS_LOADING",payload: true});
            const {status, data} = await axios({
                method: "get",
                url: "/api/products"
            });
            if(status===200){
                productDispatch({type:"SET_PRODUCTS", payload: data.products})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
        }finally{
            productDispatch({type:"SET_PRODUCTS_LOADING",payload: false});
        }
    }

    const getCategories = async() => {
        try{
            productDispatch({type:"SET_CATEGORIES_LOADING",payload: true});
            const {status, data} = await axios({
                method: "get",
                url: "/api/categories"
            });
            if(status===200){
                productDispatch({type:"SET_CATEGORIES", payload: data.categories})
            }
        }catch(error){
            toast.error(error.response.data.errors[0]);
        }finally{
            productDispatch({type:"SET_CATEGORIES_LOADING",payload: false});
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