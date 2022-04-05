import { useProducts } from "../../context";
import { ProductCard } from "../../components";
import "./products.css";
import { getSortedData, getFilteredData } from "../../utils";
import { Filter } from "./Filter";
import {useState, useEffect} from "react";

export function Products(){
    const {productState} = useProducts();
    const {sortBy, category, rating, priceRange, includeOutOfStock} = productState.filters;
    const sortedData = getSortedData(productState.products, sortBy);
    const filteredData = getFilteredData(sortedData, category, rating, priceRange, includeOutOfStock);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    return (
        <div className="product-page-container">
            <Filter setIsFilterVisible={setIsFilterVisible} isFilterVisible={isFilterVisible} />
            <main>
                <h2 className="page-title">Showing {filteredData.length} Products</h2>
                <button className="btn btn-primary-outline" onClick={()=>setIsFilterVisible(prev=>!prev)}>
                <i className="btn-icon btn-primary-icon fas fa-filter"></i>Sort | Filter</button>
                <div className="product-cards-container">
                { filteredData.length !== 0 && filteredData.map(item=><ProductCard key={item._id} value={item} />)}
                </div>
            </main>
        </div>
    );
}