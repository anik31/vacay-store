import "./wishlist.css";
import { WishlistCard } from "./WishlistCard";
import { useWishlist } from "../../context";
import { EmptyWishlist } from "./EmptyWishlist";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 10rem auto;
  border-color: var(--primary-color);
`;

export function Wishlist(){
    const {wishlistState, isWishlistLoading} = useWishlist();

    return (
        <>
        <h2 className="page-title">My Wishlist {wishlistState.length>0 && <span>({wishlistState.length})</span>}</h2>
        {isWishlistLoading
        ? <MoonLoader color={`var(--primary-color)`} css={override} size={60}/>
        : <>
        {wishlistState.length>0
        ? <div className="wishlist-card-wrapper">
            {wishlistState.map(item=><WishlistCard key={item._id} value={item} />)}
        </div>
        : <EmptyWishlist/>}
        </>
        }
        </>
    );
}