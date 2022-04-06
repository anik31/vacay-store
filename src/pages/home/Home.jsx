import { Link } from "react-router-dom";
import { hero } from "../../assets";
import "./home.css";
import { ProductCard } from "../../components";
import { useProducts } from "../../context";
import { CategoryCard } from "./CategoryCard";

export function Home(){
    const {productState} = useProducts();
    
    return (
        <main className="landing">
            <section className="hero">
                <div className="hero-content">
                    <h3>Time For Holidays ?</h3>
                    <span>Buy vacation essentials.</span>
                    <Link to="/products" className="btn btn-primary">Start shopping <i className="fas fa-long-arrow-alt-right"></i></Link>
                </div>
                <div className="img-wrapper">
                    <img className="img-responsive" src={hero} alt="hero" />
                </div>
            </section>

            <section>
                <h3 className="page-title">DEALS OF THE DAY</h3>
                <div className="product-cards-container">
                    { productState.products.length !== 0 && productState.products.filter(item=> item.dealOfTheDay).map(item=><ProductCard key={item._id} value={item} />)}
                </div>        
            </section>

            <section className="categories">
                <h3 className="page-title">CATEGORIES TO BAG</h3>
                <div className="categories-container">
                    { productState.categories.length !== 0 
                    && productState.categories.map(item=><CategoryCard key={item._id} value={item} />)}
                </div>
            </section>
        </main>
    );
}