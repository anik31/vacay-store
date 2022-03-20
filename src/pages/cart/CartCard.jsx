import "./cart.css";
import { removeFromCart, updateItemQuantity } from "../../utils";
import { useProducts } from "../../context/product-context";


export function CartCard({value}){
    const {_id ,image, title, price, originalPrice, qty, discount} = value;
    const {dispatch} = useProducts();
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
                    <button disabled={qty===1} onClick={()=>updateItemQuantity(_id, dispatch, "decrement")}><i className="fas fa-minus"></i></button>
                    <span className="counter">{qty}</span>
                    <button onClick={()=>updateItemQuantity(_id, dispatch, "increment")}><i className="fas fa-plus"></i></button>
                </div>
                <div className="card-btn-wrapper">
                    <button className="btn btn-primary-outline">SAVE FOR LATER</button>
                    <button className="btn btn-primary-outline" onClick={()=>removeFromCart(_id, dispatch)}>REMOVE</button>
                </div>
                </div>
        </div>
    );
}