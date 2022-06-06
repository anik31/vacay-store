import {createContext, useContext, useReducer, useState} from "react";
import { addressReducer } from "../reducer";
import axios from "axios";
import { useAuth } from "./auth-context";
import { toast } from "react-toastify";

const AddressContext = createContext(null);

const AddressProvider = ({children}) => {
    const [addressState, addressDispatch] = useReducer(addressReducer, []);
    const {token: encodedToken} = useAuth();
    const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);

    const getAddressData = async() => {
        try{
            const {status, data} = await axios({
                method: "get",
                url: "/api/user/addresses",
                headers: {authorization: encodedToken}
            });
            if(status===200){
                addressDispatch({type:"SET_ADDRESS", payload: data.address})
            }
        }catch(err){
            console.error(err);
        }
    }
  
    const addToAddress = async(addressData) => {
        try{
            const {status, data} = await axios({
                method: "post",
                url: "/api/user/address",
                data: {address: addressData},
                headers: {authorization: encodedToken}
            });
            toast.success("Address created");
            if(status===201){
                addressDispatch({type:"SET_ADDRESS", payload: data.address})
            }
        }catch(err){
            console.error(err);
        }
    }
  
    const removeFromAddress = async(id) => {
        try{
            const {status, data} = await axios({
                method: "delete",
                url: `/api/user/address/${id}`,
                headers: {authorization: encodedToken}
            });
            if(status===200){
                addressDispatch({type:"SET_ADDRESS", payload: data.address})
            }
        }catch(err){
            console.error(err);
        }
    }

    return (
        <AddressContext.Provider value={{
            addressState, addressDispatch, 
            getAddressData, addToAddress, removeFromAddress,
            isAddressFormVisible, setIsAddressFormVisible
        }}>
            {children}
        </AddressContext.Provider>
    );
}

const useAddress = () => useContext(AddressContext);

export {AddressProvider, useAddress};