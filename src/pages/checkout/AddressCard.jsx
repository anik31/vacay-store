import "./checkout.css";
import { useCart } from "../../context";

export function AddressCard({address}){
    const {_id, name, street, city, state, pincode} = address;
    const {checkoutDetails, setCheckoutDetails} = useCart();

    return (
        <div className="address-container">
        <label>
                <input
                  type="radio"
                  name="address"
                  className="radio-field"
                  checked={checkoutDetails && checkoutDetails.address._id===_id}
                  onChange={()=>setCheckoutDetails(prev=>({...prev, address}))}
                />
                <span className="text-md">{name}</span>
                <div className="text-sm text-gray">
                  <p>{street}, {city}</p>
                  <p>{state} - {pincode}</p>
                </div>
        </label>
        </div>
    );
}