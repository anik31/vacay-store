export function ProductCard({ value }) {
  const {outOfStock, badge, image, title, price} = value;
    return (
      <div className="card card-vertical">
        {outOfStock && <span className="card-overlay">OUT OF STOCK</span>}
        {badge && <span className="card-badge">{badge}</span>}
        <i className="far fa-heart"></i>
        <img src={image.src} className="img-responsive" alt={image.alt} />
        <h5 className="card-title">{title}</h5>
        <span className="card-price">Rs. {price}</span>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    );
};
  