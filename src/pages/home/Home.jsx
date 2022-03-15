import { Link } from "react-router-dom";
import { hero } from "../../assets";
import "./home.css";
import { CategoryCard, ProductCard } from "../../components";
import { useProducts } from "../../context/product-context";
import { useEffect } from "react";
import axios from "axios";

export function Home(){
    const {state, dispatch} = useProducts();

    /**
     * useEffect to fetch products using API
     */
    useEffect(()=>{
        (async function asyncProductFetch(){
            try{
                const {data} = await axios.get("/api/products");
                dispatch({type:"SET_PRODUCTS", payload: data.products});
            }catch(err){
                console.log(err);
            }
        })();
    },[]);

    /**
     * useEffect to fetch categories using API
     */
    useEffect(()=>{
        (async function asyncCategoryFetch(){
            try{
                const {data} = await axios.get("/api/categories");
                dispatch({type:"SET_CATEGORIES", payload: data.categories});
            }catch(err){
                console.log(err);
            }
        })();
    },[]);

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
                <h3 className="page-title">DEALS OF THE DAY</h3>
                <div className="product-cards-container">
                    { state.products.length !== 0 && state.products.filter(item=> item.dealOfTheDay).map(item=><ProductCard key={item._id} value={item} />)}
                </div>        
            </section>

            <section className="categories">
                <h3 className="page-title">CATEGORIES TO BAG</h3>
                <div className="categories-container">
                    { state.categories.length !== 0 && state.categories.map(item=><CategoryCard key={item._id} value={item} />)}
                </div>
            </section>
        </main>
    );
}