import { useProducts } from "../../context";
import { ProductCard } from "../../components";
import "./products.css";
import { getSortedData, getFilteredData } from "../../utils";
import { Filter } from "./Filter";

export function Products(){
    const {productState} = useProducts();
    const {sortBy, category, rating, priceRange, includeOutOfStock} = productState.filters;
    const sortedData = getSortedData(productState.products, sortBy);
    const filteredData = getFilteredData(sortedData, category, rating, priceRange, includeOutOfStock);

    return (
        <div className="product-page-container">
            <Filter/>
            <main>
                <h2 className="page-title">Showing {filteredData.length} Products</h2>
                <div className="product-cards-container">
                { filteredData.length !== 0 && filteredData.map(item=><ProductCard key={item._id} value={item} />)}
                </div>
            </main>
        </div>
    );
}