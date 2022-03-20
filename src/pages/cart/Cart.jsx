import "./cart.css";
import { CartCard } from "./CartCard";
import { PriceCard } from "./PriceCard";
import {useProducts} from "../../context/product-context";

export function Cart(){
    const {state} = useProducts();
    let price = {
        quantity:0,
        price:0,
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
                    price = {
                        quantity:price.quantity+Number(item.qty),
                        price: price.price+Number(item.originalPrice),
                        discount:price.discount+(Number(item.originalPrice)-Number(item.price)),
                        totalPrice: price.totalPrice+Number(item.price)
                        }
                    return <CartCard key={item._id} value={item} />})}
            </div>
            <PriceCard value={price} />
        </div>}
        </>
    );
}