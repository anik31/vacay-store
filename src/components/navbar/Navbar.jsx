import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth, useCart, useProducts, useWishlist } from "../../context";
import { logo } from "../../assets";
import "./navbar.css";
import {useState, useEffect} from "react";
import { useDebounce } from "../../hooks";

const hamburgerMenuData = [
    { linkTo: "/", linkFor: "Home", icon: "fas fa-home" },
    { linkTo: "/products", linkFor: "Products", icon: "fas fa-store" },
    { linkTo: "/wishlist", linkFor: "Wishlist", icon: "fas fa-heart" },
    { linkTo: "/cart", linkFor: "Cart", icon: "fas fa-shopping-cart" }
];

const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : ""
});

export function Navbar(){
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {cartState, cartDispatch} = useCart();
    const {wishlistState, wishlistDispatch} = useWishlist();
    const {productDispatch} = useProducts();
    const {isLoggedIn, logoutUser, user} = useAuth();
    const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);
    const [searchVal, setSearchVal] = useState("");
	
    const debouncedSearchVal = useDebounce(searchVal, 300);

	useEffect(() => {
		productDispatch({type: "SET_SEARCH_TERM", payload: debouncedSearchVal});
	}, [debouncedSearchVal]);
    
    const logoutHandler = () => {
        logoutUser();
        cartDispatch({type:"SET_CART", payload: []});
        wishlistDispatch({type:"SET_WISHLIST", payload: []});
        navigate("/");
    };
    
    return (
        <header className="header">
        <div className="hamburger-logo-wrapper">
            <button onClick={()=>setIsHamburgerMenuVisible(true)}><i className="fas fa-bars"></i></button>
            <Link to="/"><img src={logo} alt="vacay-store-logo" className="logo" /></Link>
        </div>
        <nav className="ham-menu box-shadow" style={{display:isHamburgerMenuVisible?"block":"none"}}>
            <ul>
                <li>
                    {isLoggedIn
                    ? <Link to="/" className="ham-item">
                        <i className="fas fa-user"></i>
                    Hello, {user.firstName}</Link> 
                    : <Link to="/login" className="ham-item">
                        <i className="fas fa-user"></i>
                    Login/ Sign Up</Link>}
                    <button onClick={()=>setIsHamburgerMenuVisible(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </li>
                {hamburgerMenuData.map(item=>
                <li key={item.linkTo}>
                    <NavLink style={getActiveStyle} to={item.linkTo} className="ham-item">
                        <i className={item.icon}></i>
                        <span>{item.linkFor}</span>
                    </NavLink>
                </li>)}
                {isLoggedIn && <li>
                    <Link to="/" className="ham-item" onClick={logoutHandler}>
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Sign Out</span>
                    </Link>
                </li>}
            </ul>
        </nav>
        <nav className="navigation nav-hide">
            <ul>
                <li><NavLink style={getActiveStyle} to="/" className="btn btn-secondary-link">Home</NavLink></li>
                <li><NavLink style={getActiveStyle} to="/products" className="btn btn-secondary-link">Products</NavLink></li>
            </ul>
        </nav>
        <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" 
            onChange={({target})=>{
                pathname!=="/products" && navigate("/products")
                setSearchVal(target.value)
            }} />
        </div>
        <nav className="navigation">
            <ul>
                <li className="nav-hide">{
                    isLoggedIn
                    ? <Link to="/" className="btn btn-primary" onClick={logoutHandler}>Logout</Link>   
                    : <Link to="/login" className="btn btn-primary">Login</Link>
                    }
                </li>
                <li>
                    <NavLink style={getActiveStyle} to="/wishlist" className="btn btn-secondary-icon-text-no-border">
                        <div className="badge-wrapper">
                            <i className="btn-icon fas fa-heart"></i>
                            {wishlistState.length!==0 && <span className="badge badge-number">{wishlistState.length}</span>}
                        </div>
                        <span className="nav-hide">Wishlist</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink style={getActiveStyle} to="/cart" className="btn btn-secondary-icon-text-no-border">
                        <div className="badge-wrapper">
                            <i className="btn-icon fas fa-shopping-cart"></i>
                            {cartState.length!==0 && <span className="badge badge-number">{cartState.length}</span>}
                        </div>
                        <span className="nav-hide">Cart</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    );
}