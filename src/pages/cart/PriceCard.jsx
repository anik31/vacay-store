import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./cart.css";
import { useCart } from "../../context";

export function PriceCard({value}){
    const {quantity, markedPrice, totalPrice, discount} = value;
    const {setCheckoutDetails} = useCart();
    
    useEffect(()=>{
        setCheckoutDetails(prev=>({...prev, cartDetails: value}));
    }, []);
    
    return (
        <aside className="price-card box-shadow">
            <h4>PRICE DETAILS</h4>
            <hr/>
            <ul>
                <li>
                    <span>Price ({quantity} items)</span>
                    <span>Rs. {markedPrice}</span>
                </li>
                <li>
                    <span>Discount</span>
                    <span className="text-primary">- Rs. {discount}</span>
                </li>
                <li>
                    <span>Delivery Charges</span>
                    <span className="text-primary">FREE</span>
                </li>
            </ul>
            <hr/>
            <div className="total-amount">
                <span>TOTAL AMOUNT</span>
                <span>Rs. {totalPrice}</span>
            </div>
            <hr/>
            <p className="text-primary">You will save Rs. {discount} on this order</p>
            <Link to="/checkout" className="btn btn-primary">CHECKOUT</Link>
        </aside>
    );
}