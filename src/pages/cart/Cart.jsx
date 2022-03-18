import "./cart.css";
import { CartCard } from "./CartCard";
import { PriceCard } from "./PriceCard";

export function Cart(){
    return (
        <>
        <h2 className="page-title">My Cart (<span>4</span>)</h2>
        <div className="grid-container-cart">
            <div className="card-wrapper-cart">
                <CartCard/>
            </div>
            <PriceCard/>
        </div>
        </>
    );
}