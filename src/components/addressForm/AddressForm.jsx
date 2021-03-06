import "./addressForm.css";
import { useState } from "react";
import {useAddress} from "../../context";
import { toast } from "react-toastify";

export function AddressForm(){
    const {setIsAddressFormVisible, addToAddress} = useAddress();
    const [address, setAddress] = useState({
        name: "",
        street: "",
        pincode: "",
        city: "",
        state: ""
    });
    const dummyAddress = {
        name: "Sonam Gupta",
        street: "Infront of BSNL telephone office",
        pincode: "757001",
        city: "Baripada",
        state: "Odisha"
    }
    
    const createAddressHandler = () => {
        if(address.name.trim() && address.street.trim() && address.pincode.trim() && address.city.trim() && address.state.trim()){
            addToAddress(address);
            setIsAddressFormVisible(false);
        }else{
            toast.warning("Fill all fields");
        }
    };

    return (
        <div className="modal-wrapper">
            <output className="modal">
                <button onClick={()=>setIsAddressFormVisible(false)}>
                    <i className="btn-icon fas fa-times"></i>
                </button>
                <h2>Add new address</h2>
                <input type="text" placeholder="Name" value={address.name}
                onChange={({target})=>setAddress(prev=>({...prev,name:target.value}))} />
                <input type="text" placeholder="Address" value={address.street} 
                onChange={({target})=>setAddress(prev=>({...prev,street:target.value}))} />
                <input type="number" placeholder="Pincode" value={address.pincode} 
                onChange={({target})=>setAddress(prev=>({...prev,pincode:target.value}))} />
                <input type="text" placeholder="City" value={address.city} 
                onChange={({target})=>setAddress(prev=>({...prev,city:target.value}))} />
                <input type="text" placeholder="State" value={address.state} 
                onChange={({target})=>setAddress(prev=>({...prev,state:target.value}))} />
                <button className="btn btn-primary-outline" onClick={()=>setAddress(dummyAddress)}>Fill dummy values</button>
                <button className="btn btn-primary" onClick={createAddressHandler}>Save</button>
            </output>
        </div>
    );
}