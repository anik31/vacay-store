import "./cart.css";
import { CartCard } from "./CartCard";
import { PriceCard } from "./PriceCard";
import {useCart} from "../../context";

export function Cart(){
    const {cartState} = useCart();
    let priceObj = {
        quantity:0,
        markedPrice:0,
        discount:0,
        totalPrice:0
    }
    
    return (
        <>
        <h2 className="page-title">My Cart ({cartState.length})</h2>
        {cartState.length>0 &&
        <div className="grid-container-cart">
            <div className="card-wrapper-cart">
                {cartState.map(item=>{
                    const {_id, qty, originalPrice, price} = item; 
                    priceObj = {
                        quantity: priceObj.quantity + Number(qty),
                        markedPrice: priceObj.markedPrice + Number(qty) * Number(originalPrice),
                        discount: priceObj.discount + Number(qty) * (Number(originalPrice) - Number(price)),
                        totalPrice: priceObj.totalPrice + Number(qty) * Number(price)
                    }
                    return <CartCard key={_id} value={item} />})}
            </div>
            <PriceCard value={priceObj} />
        </div>}
        </>
    );
}