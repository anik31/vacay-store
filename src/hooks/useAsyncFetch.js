import { useProducts } from "../context/product-context";
import {useEffect} from "react";
import axios from "axios";

export function useAsyncFetch({url, dispatchType, dispatchPayload}){
    const {dispatch}  = useProducts();
    useEffect(()=>{
        (async function asyncProductFetch(){
            try{
                const {data} = await axios.get(url);
                dispatch({type:dispatchType, payload: data[dispatchPayload]});
            }catch(err){
                console.log(err);
            }
        })();
    },[]);
}