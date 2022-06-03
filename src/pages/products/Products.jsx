import { useProducts } from "../../context";
import { ProductCard } from "../../components";
import "./products.css";
import { getSortedData, getFilteredData, getSearchedData } from "../../utils";
import { Filter } from "./Filter";
import {useState} from "react";

export function Products(){
    const {productState} = useProducts();
    const {sortBy, category, rating, priceRange, includeOutOfStock, searchTerm} = productState.filters;
    const sortedData = getSortedData(productState.products, sortBy);
    const filteredData = getFilteredData(sortedData, category, rating, priceRange, includeOutOfStock);
    const searchedData = getSearchedData(filteredData, searchTerm);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    return (
        <div className="product-page-container">
            <Filter setIsFilterVisible={setIsFilterVisible} isFilterVisible={isFilterVisible} />
            <main>
                <h2 className="page-title">Showing {searchedData.length} Products</h2>
                <button className="btn btn-primary-outline btn-filter" onClick={()=>setIsFilterVisible(prev=>!prev)}>
                <i className="btn-icon btn-primary-icon fas fa-filter"></i>Sort | Filter</button>
                { searchedData.length > 0
                ?   <div className="product-cards-container">
                        {searchedData.map(item=><ProductCard key={item._id} value={item} />)}
                    </div>
                : <p className="empty-state">No Products Found</p>
                }
            </main>
        </div>
    );
}