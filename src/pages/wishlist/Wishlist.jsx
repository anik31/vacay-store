import "./wishlist.css";
import { WishlistCard } from "./WishlistCard";

export function Wishlist(){
    return (
        <div className="wishlist-card-wrapper">
            <h2>My Wishlist (3)</h2>
            <WishlistCard />
        </div>
    );
}