import "./cart.css";
import { CartCard } from "./CartCard";
import { PriceCard } from "./PriceCard";
import {useProducts} from "../../context/product-context";

export function Cart(){
    const {state} = useProducts();
    let priceObj = {
        quantity:0,
        markedPrice:0,
        discount:0,
        totalPrice:0
    }
    
    return (
        <>
        <h2 className="page-title">My Cart ({state.cart.length})</h2>
        {state.cart.length>0 &&
        <div className="grid-container-cart">
            <div className="card-wrapper-cart">
                {state.cart.map(item=>{
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