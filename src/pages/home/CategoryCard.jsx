import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/product-context";

export function CategoryCard({value}){
    const {categoryName,image} = value;
    const {dispatch} = useProducts();
    const navigate = useNavigate();

    return (
        <div 
        className="category-card" 
        onClick={()=>{
            dispatch({type:"FILTER_BY_CATEGORY", payload:categoryName});
            navigate("/products");
            }}
        >
            <img className="img-round img-round-sizing" src={image.src} alt={image.alt} loading="lazy" />
            <span>{categoryName}</span>
        </div>
    );
}