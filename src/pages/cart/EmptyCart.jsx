import { Link } from "react-router-dom";
import {emptyCart} from "../../assets";

export function EmptyCart(){
    return (
        <main className="container-error-page">
            <img src={emptyCart} alt="empty cart illustration" />
            <h3>Your cart is empty!</h3>
            <p className="text-sm">Add items to it now.</p>
            <Link to="/products" className="btn btn-primary">Shop now</Link>
        </main>
    );
}; 