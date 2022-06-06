import "./cart.css";
import { useCart, useWishlist } from "../../context";
import { useThrottle } from "../../hooks";

export function CartCard({value}){
    const {_id ,image, title, price, originalPrice, qty, discount} = value;
    const {removeFromCart, updateItemQuantity} = useCart();
    const {wishlistState, addToWishlist} = useWishlist();

    const decrementQuantity = () => updateItemQuantity(_id, "decrement");
    const decrementHandler = useThrottle(decrementQuantity,400);

    const incrementQuantity = () => updateItemQuantity(_id, "increment");
    const incrementHandler = useThrottle(incrementQuantity,400);

    const saveForLater = () => {
        wishlistState.filter(item=> item._id===_id).length!==1 && addToWishlist(value)
        removeFromCart(_id)
    };
    const saveForLaterHandler = useThrottle(saveForLater,400);

    return (
        <div className="card card-horizontal card-horizontal-md">
            <img src={image.src} className="img-responsive" alt={image.alt} />
            <div className="card-content-vertical">
                <div className="card-info">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-price-content">
                        <span className="card-price">Rs. {price}</span>
                        <del className="text-gray">Rs. {originalPrice}</del>
                        <span className="text-primary text-sm">{discount}% off</span>
                    </div>
                </div>
                <div className="product-count">
                    <span>Quantity : </span>
                    <button disabled={qty<=1} onClick={()=>decrementHandler()}><i className="fas fa-minus"></i></button>
                    <span className="counter">{qty}</span>
                    <button onClick={()=>incrementHandler()}><i className="fas fa-plus"></i></button>
                </div>
                <div className="card-btn-wrapper">
                    <button className="btn btn-primary-outline" 
                    onClick={()=>saveForLaterHandler()}>SAVE FOR LATER</button>
                    <button className="btn btn-primary-outline" onClick={()=>removeFromCart(_id)}>REMOVE</button>
                </div>
                </div>
        </div>
    );
}