import "./wishlist.css";
import { WishlistCard } from "./WishlistCard";
import {useProducts} from "../../context/product-context";

export function Wishlist(){
    const {state} = useProducts();
    return (
        <div className="wishlist-card-wrapper">
            <h2>My Wishlist ({state.wishlist.length})</h2>
            {state.wishlist.map(item=><WishlistCard key={item._id} value={item} />)}
        </div>
    );
}