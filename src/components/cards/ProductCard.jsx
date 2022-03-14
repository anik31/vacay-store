export function ProductCard({ value }) {
    return (
      <div className="card card-vertical">
        {value.outOfStock && <span className="card-overlay">OUT OF STOCK</span>}
        {value.badge && <span className="card-badge">{value.badge}</span>}
        <i className="far fa-heart"></i>
        <img src={value.image.src} className="img-responsive" alt={value.image.alt} />
        <h5 className="card-title">{value.title}</h5>
        <span className="card-price">Rs. {value.price}</span>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    );
};
  