import { useProducts } from "../../context";

export function Filter(){
    const {productState, productDispatch} = useProducts();
    const {sortBy, category, rating, priceRange, includeOutOfStock} = productState.filters;
    
    return (
        <aside className="filter">
                <div className="filter-header">
                    <h3>Filters</h3>
                    <button 
                    className="btn btn-primary-link" 
                    onClick={()=>productDispatch({type:"CLEAR_ALL_FILTERS"})}>CLEAR ALL</button>
                </div>
                <ul>
                    <h4>Price</h4>
                    <li>
                        <input 
                        type="range" 
                        value={priceRange} 
                        list="tickmarks" 
                        min="5000" 
                        max="25000" 
                        step="5000" 
                        onChange={e=>productDispatch({type:"FILTER_BY_PRICE_RANGE",payload:Number(e.target.value)})} />
                        <datalist id="tickmarks">
                            <option value="5000" label="5000"></option>
                            <option value="10000" label="10000"></option>
                            <option value="15000" label="15000"></option>
                            <option value="20000" label="20000"></option>
                            <option value="25000" label="25000"></option>
                        </datalist>
                    </li>
                </ul>
                <ul>
                    <h4>Category</h4>
                    {productState.categories.map(categoryItem=>{
                        const {_id, categoryName} = categoryItem;
                        return (
                            <li key={_id} className="input">
                                <label>
                                    <input 
                                        type="checkbox" 
                                        checked={category.includes(categoryName)} 
                                        onChange={()=>productDispatch({type:"FILTER_BY_CATEGORY",payload:categoryName})}
                                    />
                                {categoryName}</label>
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    <h4>Rating</h4>
                    <li className="input">
                        <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                checked={rating===4} 
                                onChange={()=>productDispatch({type:"FILTER_BY_RATING",payload:4})} 
                            />
                        4 Stars & above</label>
                    </li>
                    <li className="input">
                        <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                checked={rating===3} 
                                onChange={()=>productDispatch({type:"FILTER_BY_RATING",payload:3})} 
                            />
                        3 Stars & above</label>
                    </li>
                    <li className="input">
                        <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                checked={rating===2} 
                                onChange={()=>productDispatch({type:"FILTER_BY_RATING",payload:2})} 
                            />
                        2 Stars & above</label>
                    </li>
                    <li className="input">
                        <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                checked={rating===1} 
                                onChange={()=>productDispatch({type:"FILTER_BY_RATING",payload:1})} 
                            />
                        1 Stars & above</label>
                    </li>
                </ul>
                <ul>
                    <h4>Sort by</h4>
                    <li className="input">
                        <label>
                            <input 
                                type="radio" 
                                name="sort-by" 
                                checked={sortBy==="FEATURED"} 
                                onChange={()=>productDispatch({type:"SORT_PRODUCTS", payload:"FEATURED"})} 
                            />
                        Featured</label>
                    </li>
                    <li className="input">
                        <label>
                            <input 
                                type="radio" 
                                name="sort-by" 
                                checked={sortBy==="LOW_TO_HIGH"} 
                                onChange={()=>productDispatch({type:"SORT_PRODUCTS", payload:"LOW_TO_HIGH"})} 
                            />
                        Price - Low to High</label>
                    </li>
                    <li className="input">
                        <label>
                            <input 
                                type="radio" 
                                name="sort-by" 
                                checked={sortBy==="HIGH_TO_LOW"} 
                                onChange={()=>productDispatch({type:"SORT_PRODUCTS", payload:"HIGH_TO_LOW"})} 
                            />
                        Price - High to Low</label>
                    </li>
                </ul>
                <ul>
                    <h4>Availability</h4>
                    <li className="input">
                        <label>
                            <input 
                                type="checkbox" 
                                checked={includeOutOfStock} 
                                onChange={()=>productDispatch({type:"FILTER_BY_OUT_OF_STOCK",payload:!includeOutOfStock})} 
                            />
                        Include out of stock</label>
                    </li>
                </ul>
            </aside>
    );
}