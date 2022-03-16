import { Link } from "react-router-dom";
import "./cards.css";
export function CategoryCard({value}){
    const {image, categoryName} = value;
    return (
        <Link to="/products" className="category-card">
            <img className="img-round img-round-sizing" src={image.src} alt={image.alt} loading="lazy" />
            <text>{categoryName}</text>
        </Link>
    );
}