import "./cart.css";
import { useCart, useWishlist } from "../../context";


export function CartCard({value}){
    const {_id ,image, title, price, originalPrice, qty, discount} = value;
    const {removeFromCart, updateItemQuantity} = useCart();
    const {wishlistState, addToWishlist} = useWishlist();

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
                    <button disabled={qty===1} onClick={()=>updateItemQuantity(_id, "decrement")}><i className="fas fa-minus"></i></button>
                    <span className="counter">{qty}</span>
                    <button onClick={()=>updateItemQuantity(_id, "increment")}><i className="fas fa-plus"></i></button>
                </div>
                <div className="card-btn-wrapper">
                    <button className="btn btn-primary-outline" 
                    onClick={()=>{
                        wishlistState.filter(item=> item._id===_id).length!==1 && addToWishlist(value)
                        removeFromCart(_id)}}
                        >SAVE FOR LATER</button>
                    <button className="btn btn-primary-outline" onClick={()=>removeFromCart(_id)}>REMOVE</button>
                </div>
                </div>
        </div>
    );
}