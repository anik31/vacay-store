import "./wishlist.css";
import { WishlistCard } from "./WishlistCard";
import { useWishlist } from "../../context";
import { EmptyWishlist } from "./EmptyWishlist";

export function Wishlist(){
    const {wishlistState} = useWishlist();

    return (
        <>
        <h2 className="page-title">My Wishlist {wishlistState.length>0 && <span>({wishlistState.length})</span>}</h2>
        {wishlistState.length>0
        ? <div className="wishlist-card-wrapper">
            {wishlistState.map(item=><WishlistCard key={item._id} value={item} />)}
        </div>
        : <EmptyWishlist/>}
        </>
    );
}