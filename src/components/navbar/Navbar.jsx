import { Link } from "react-router-dom";
import { useProducts } from "../../context/product-context";

export function Navbar(){
    const {state} = useProducts();

    return (
        <header className="header box-shadow">
        <div className="hamburger-logo-wrapper">
            <button><i className="fas fa-bars"></i></button>
            <h2 className="logo">vacay</h2>
        </div>
        <nav className="hamburger-menu">
            <ul>
                <li><button><i className="fas fa-times"></i></button></li>
                <li><Link to="/login" className="btn btn-secondary-link">Login</Link></li>
                <li><Link to="/wishlist" className="btn btn-secondary-link">Wishlist</Link></li>
                <li><Link to="/cart" className="btn btn-secondary-link">Cart</Link></li>
            </ul>
        </nav>
        <nav className="navigation">
            <ul>
                <li><Link to="/" className="btn btn-secondary-link">Home</Link></li>
                <li><Link to="/products" className="btn btn-secondary-link">Products</Link></li>
            </ul>
        </nav>
        <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" />
        </div>
        <nav className="navigation nav-hide">
            <ul>
                <li><Link to="/login" className="btn btn-primary">Login</Link></li>
                <li className="badge-wrapper">
                    <Link to="/wishlist"><i className="btn-icon far fa-heart"></i></Link>
                    <span className="badge badge-number">5</span>
                </li>
                <li>
                    <Link to="/cart" className="btn btn-secondary-icon-text-no-border">
                        <div className="badge-wrapper">
                            <i className="btn-icon fas fa-shopping-cart"></i>
                            {state.cart.length!==0 && <span className="badge badge-number">{state.cart.length}</span>}
                        </div>
                        Cart
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}