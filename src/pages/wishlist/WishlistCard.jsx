import "./wishlist.css";
import { useCart, useWishlist } from "../../context";
import { useThrottle } from "../../hooks";

export function WishlistCard({value}){
    const {_id, image, title, rating, price, originalPrice, discount} = value;
    const {cartState, addToCart, updateItemQuantity} = useCart();
    const {removeFromWishlist} = useWishlist();

    const addToCartFromWishlist = () => {
        cartState.find(item=>item._id===_id)
        ? updateItemQuantity(_id, "increment")
        : addToCart(value)
    };
    const addToCartHandler = useThrottle(addToCartFromWishlist,400);

    return (
        <div className="card card-horizontal card-horizontal-lg">
            <img src={image.src} className="img-responsive" alt={image.alt} />
            <div className="card-info">
                <h5 className="card-title">{title}</h5>
                <div className="rating-container">
                    <div className="rating-pill">
                        <span className="rating-pill-text">{rating.value}</span>
                        <i className="fas fa-star"></i>
                    </div>
                    <span className="text-gray text-sm">({rating.count})</span>
                </div>
                <div className="card-price-content">
                    <span className="card-price">Rs. {price}</span>
                    <del className="text-gray">Rs. {originalPrice}</del>
                    <span className="text-primary text-sm">{discount}% off</span>
                </div>
            </div>
            <div className="card-btn-wrapper">
                <button className="btn btn-primary" onClick={()=>addToCartHandler()}>ADD TO CART</button>
                <button className="btn btn-primary-outline" onClick={()=>removeFromWishlist(_id)}>REMOVE</button>
            </div>
        </div>
    );
}