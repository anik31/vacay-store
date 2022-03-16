import {createContext, useContext, useReducer} from "react";
import { productReducer } from "../reducer/product-reducer";

const ProductContext = createContext(null);

const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(productReducer,{
        products:[],
        categories:[]
    })
    return (
        <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    );
}

const useProducts = () => useContext(ProductContext);

export {ProductProvider, useProducts};