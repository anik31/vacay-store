import { discountCalc } from "../../utils/discountCalc";
import "./cards.css";

export function ProductCard({ value }) {
  const {outOfStock, badge, image, title, price, originalPrice, rating} = value;
    return (
      <div className="card card-vertical">
        {outOfStock && <span className="card-overlay">OUT OF STOCK</span>}
        {badge && <span className="card-badge">{badge}</span>}
        <i className="far fa-heart"></i>
        <img src={image.src} className="img-responsive" alt={image.alt} />
        <h5 className="card-title">{title}</h5>
        <div className="rating-container">
          <div class="rating-pill">
            <span class="rating-pill-text">{rating.value}</span>
            <i class="fas fa-star"></i>
          </div>
          <span className="text-gray text-sm">({rating.count})</span>
        </div>
        <div className="card-price-content">
          <span className="card-price">Rs. {price}</span>
          <del className="text-gray">Rs. {originalPrice}</del>
          <span className="text-primary text-sm">{discountCalc(price,originalPrice)}% off</span>
        </div>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    );
};
  