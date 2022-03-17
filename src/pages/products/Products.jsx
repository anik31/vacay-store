import { useProducts } from "../../context/product-context";
import { ProductCard } from "../../components";
import "./products.css";
import { getSortedData, getFilteredData } from "../../utils";
import { Filter } from "./Filter";

export function Products(){
    const {state} = useProducts();
    const {sortBy, category, rating, priceRange, includeOutOfStock} = state.filters;
    const sortedData = getSortedData(state.products, sortBy);
    const filteredData = getFilteredData(sortedData, category, rating, priceRange, includeOutOfStock);

    return (
        <div className="product-page-container">
            <Filter/>
            <main>
                <h2 className="page-title">Showing All Products <span>(Showing {filteredData.length} products)</span></h2>
                <div className="product-cards-container">
                { filteredData.length !== 0 && filteredData.map(item=><ProductCard key={item._id} value={item} />)}
                </div>
            </main>
        </div>
    );
}