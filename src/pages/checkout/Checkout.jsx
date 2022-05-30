import { CheckoutDetails } from "./CheckoutDetails";
import "./checkout.css";
import { useAddress, useCart } from "../../context";
import { AddressForm } from "../../components";
import { AddressCard } from "./AddressCard";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

export function Checkout(){
    const {setIsAddressFormVisible, isAddressFormVisible, addressState} = useAddress();
    const {cartState} = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        cartState.length === 0 && navigate("/products");
    }, []);    

    return (
        <>
            <h2 className="page-title">Checkout</h2>
            <div className="checkout-container">
                <div className="card-wrapper-cart">
                    <h3>Select delivery address</h3>
                    {addressState.map(address=> <AddressCard key={address._id} address={address} />)}
                        <button className="btn btn-primary-outline btn-address" 
                        onClick={()=>setIsAddressFormVisible(true)}>Add new address</button>
                </div>
            {cartState.length!==0 && <CheckoutDetails />}
            </div>
            {isAddressFormVisible && <AddressForm/>}
        </>
    );
}