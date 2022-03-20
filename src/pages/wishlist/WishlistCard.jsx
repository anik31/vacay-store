import "./wishlist.css";

export function WishlistCard(){
    return (
        <div className="card card-horizontal card-horizontal-lg">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="img-responsive" alt="camera" />
            <div className="card-info">
                <h5 className="card-title">Camera</h5>
                <div className="rating-container">
                    <div className="rating-pill">
                        <span className="rating-pill-text">4</span>
                        <i className="fas fa-star"></i>
                    </div>
                    <span className="text-gray text-sm">(556644)</span>
                </div>
                <div className="card-price-content">
                    <span className="card-price">Rs. 100</span>
                    <del className="text-gray">Rs. 110</del>
                    <span className="text-primary text-sm">10% off</span>
                </div>
            </div>
            <div className="card-btn-wrapper">
                <button className="btn btn-primary">MOVE TO CART</button>
                <button className="btn btn-primary-outline">REMOVE</button>
            </div>
        </div>
    );
}