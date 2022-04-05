import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../../context";
import { logo } from "../../assets";
import "./navbar.css";
import {useState} from "react";

export function Navbar(){
    const {cartState} = useCart();
    const {wishlistState} = useWishlist();
    const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);
    const hamburgerMenuData = [
        { linkTo: "/", linkFor: "Home", icon: "fas fa-home" },
        { linkTo: "/products", linkFor: "Products", icon: "fas fa-store" },
        { linkTo: "/wishlist", linkFor: "Wishlist", icon: "fas fa-heart" },
        { linkTo: "/cart", linkFor: "Cart", icon: "fas fa-shopping-cart" },
        { linkTo: "/login", linkFor: "Login/Sign Up", icon: "fas fa-user" },
    ]

    return (
        <header className="header">
        <div className="hamburger-logo-wrapper">
            <button onClick={()=>setIsHamburgerMenuVisible(true)}><i className="fas fa-bars"></i></button>
            <Link to="/"><img src={logo} alt="vacay-store-logo" className="logo" /></Link>
        </div>
        <nav className="ham-menu box-shadow" style={{display:isHamburgerMenuVisible?"block":"none"}}>
            <ul>
                <li>
                    <Link to="/login" className="ham-item">
                        <i className="fas fa-user"></i>
                    Login/ Sign Up</Link>
                    <button onClick={()=>setIsHamburgerMenuVisible(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </li>
                {hamburgerMenuData.map(item=>
                <li key={item.linkTo}>
                    <Link to={item.linkTo} className="ham-item">
                        <i className={item.icon}></i>
                        <span>{item.linkFor}</span>
                    </Link>
                </li>)}
            </ul>
        </nav>
        <nav className="navigation nav-hide">
            <ul>
                <li><Link to="/" className="btn btn-secondary-link">Home</Link></li>
                <li><Link to="/products" className="btn btn-secondary-link">Products</Link></li>
            </ul>
        </nav>
        <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" />
        </div>
        <nav className="navigation">
            <ul>
                <li className="nav-hide"><Link to="/login" className="btn btn-primary">Login</Link></li>
                <li>
                    <Link to="/wishlist" className="btn btn-secondary-icon-text-no-border">
                        <div className="badge-wrapper">
                            <i className="btn-icon fas fa-heart"></i>
                            {wishlistState.length!==0 && <span className="badge badge-number">{wishlistState.length}</span>}
                        </div>
                        <span className="nav-hide">Wishlist</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="btn btn-secondary-icon-text-no-border">
                        <div className="badge-wrapper">
                            <i className="btn-icon fas fa-shopping-cart"></i>
                            {cartState.length!==0 && <span className="badge badge-number">{cartState.length}</span>}
                        </div>
                        <span className="nav-hide">Cart</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}