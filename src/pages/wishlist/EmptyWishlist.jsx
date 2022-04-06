import { Link } from "react-router-dom";
import {emptyWishlist} from "../../assets";

export function EmptyWishlist(){
    return (
        <main className="container-error-page">
            <img src={emptyWishlist} alt="empty wishlist illustration" />
            <h3>Your wishlist is empty!</h3>
            <p className="text-sm">Add items to it now.</p>
            <Link to="/products" className="btn btn-primary">Shop now</Link>
        </main>
    );
}; 