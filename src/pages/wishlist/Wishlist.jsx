import "./wishlist.css";
import { WishlistCard } from "./WishlistCard";
import { useWishlist } from "../../context";

export function Wishlist(){
    const {wishlistState} = useWishlist();

    return (
        <div className="wishlist-card-wrapper">
            <h2>My Wishlist ({wishlistState.length})</h2>
            {wishlistState.map(item=><WishlistCard key={item._id} value={item} />)}
        </div>
    );
}