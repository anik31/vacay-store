import { Link } from "react-router-dom";
import { hero } from "../../assets";
import "./home.css";
import { CategoryCard, ProductCard } from "../../components";

export function Home(){
    return (
        <main className="landing">
            <section className="hero">
                <div className="hero-content">
                    <h3>Time For Holidays ?</h3>
                    <text>Buy vacation essentials.</text>
                    <Link to="/products" className="btn btn-primary">Start shopping <i className="fas fa-long-arrow-alt-right"></i></Link>
                </div>
                <div className="img-wrapper">
                    <img className="img-responsive" src={hero} alt="hero" />
                </div>
            </section>
            <section>
                <h3 class="page-title">DEALS OF THE DAY</h3>
                <div class="product-cards-container">
                </div>        
            </section>
            <section class="categories">
                <h3 class="page-title">CATEGORIES TO BAG</h3>
                <div class="categories-container">
                </div>
            </section>
        </main>
    );
}