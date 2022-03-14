import { Link } from "react-router-dom";
import "./cards.css";
export function CategoryCard({value}){
    return (
        <Link to="/products" className="category-card">
            <img className="img-round img-round-sizing" src={value.image.src} alt="camera" />
            <text>{value.categoryName}</text>
        </Link>
    );
}