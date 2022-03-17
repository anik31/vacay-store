import {createContext, useContext, useReducer} from "react";
import { productReducer } from "../reducer/product-reducer";

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
    }
};

const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    return (
        <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    );
}

const useProducts = () => useContext(ProductContext);

export {ProductProvider, useProducts};