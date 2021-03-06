import { useAuth, useCart, useWishlist } from "../../context";
import { discountCalc } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import "./cards.css";
import { useThrottle } from "../../hooks";

export function ProductCard({ value }) {
  const {_id ,outOfStock, badge, image, title, price, originalPrice, rating} = value;
  const discount = discountCalc(price,originalPrice);
  const {wishlistState, addToWishlist, removeFromWishlist} = useWishlist();
  const {cartState, addToCart} = useCart();
  const navigate = useNavigate();
  const valueWithDiscount = {...value, discount:discount};
  const {isLoggedIn} = useAuth();
  const location = useLocation();

  const addProductToWishlist = () => {
    isLoggedIn
    ? addToWishlist(valueWithDiscount)
    : navigate("/login", {replace: true, state: {from: location}})
  };
  const addToWishlistHandler = useThrottle(addProductToWishlist,400);

  const addProductToCart = () => {
    isLoggedIn
    ? addToCart(valueWithDiscount)
    : navigate("/login", {replace: true, state: {from: location}})
  };
  const addToCartHandler = useThrottle(addProductToCart,400);
  
    return (
      <div className="card card-vertical">
        {outOfStock && <span className="card-overlay">OUT OF STOCK</span>}
        {badge && <span className="card-badge">{badge}</span>}
        
        {wishlistState.find(item=>item._id===_id)
        ? <i className="red-heart fas fa-heart" onClick={()=>removeFromWishlist(_id)}></i>
        : <i className="far fa-heart" onClick={()=>addToWishlistHandler()}></i>}
        
        <img src={image.src} className="img-responsive" alt={image.alt} />
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
        
        {cartState.find(item=> item._id===_id)
        ?<button className="btn btn-primary" onClick={()=>navigate("/cart")}>Go to cart</button>
        :<button className="btn btn-primary" onClick={()=>addToCartHandler()}>Add to cart</button>}
      </div>
    );
};
  