import "./cart.css";

export function CartCard(){
    return (
        <div className="card card-horizontal card-horizontal-md">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="img-responsive" alt="camera" />
            <div className="card-content-vertical">
                <div className="card-info">
                    <h5 className="card-title">Nikon DSLR Camera</h5>
                    <div className="card-price-content">
                        <span className="card-price">Rs. 100</span>
                        <del className="text-gray">Rs. 110</del>
                        <span className="text-primary text-sm">10% off</span>
                    </div>
                </div>
                <div className="product-count">
                    <span>Quantity : </span>
                    <button><i className="fas fa-minus"></i></button>
                    <span className="counter">2</span>
                    <button><i className="fas fa-plus"></i></button>
                </div>
                <div className="card-btn-wrapper">
                    <button className="btn btn-primary-outline">Save to wishlist</button>
                    <button className="btn btn-primary-outline">Remove</button>
                </div>
                </div>
        </div>
    );
}