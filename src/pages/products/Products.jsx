import { useProducts } from "../../context/product-context";
import { ProductCard } from "../../components";
import "./products.css";

export function Products(){
    const {state} = useProducts();

    return (
        <div className="product-page-container">
            <aside className="filter">
                <div className="filter-header">
                    <h3>Filters</h3>
                    <button className="btn btn-primary-link">CLEAR ALL</button>
                </div>
                <ul>
                    <h4>Price</h4>
                    <li>
                        <input type="range" list="tickmarks" min="100" max="900" step="200" />
                        <datalist id="tickmarks">
                        <option value="100" label="100"></option>
                        <option value="300" label="300"></option>
                        <option value="500" label="500"></option>
                        <option value="700" label="700"></option>
                        <option value="900" label="900"></option>
                        </datalist>
                    </li>
                </ul>
                <ul>
                    <h4>Category</h4>
                    {state.categories.map(category=>{
                        return (
                            <li className="input input-checkbox-radio">
                                <input type="checkbox" />
                                <label for="">{category.categoryName}</label>
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    <h4>Rating</h4>
                    <li className="input input-checkbox-radio">
                        <input type="radio" name="rating" />
                        <label for="">4 Stars & above</label>
                    </li>
                    <li className="input input-checkbox-radio">
                        <input type="radio" name="rating" />
                        <label for="">3 Stars & above</label>
                    </li>
                    <li className="input input-checkbox-radio">
                        <input type="radio" name="rating" />
                        <label for="">2 Stars & above</label>
                    </li>
                    <li className="input input-checkbox-radio">
                        <input type="radio" name="rating" />
                        <label for="">1 Stars & above</label>
                    </li>
                </ul>
                <ul>
                    <h4>Sort by</h4>
                    <li className="input input-checkbox-radio">
                        <input type="radio" name="sort-by" />
                        <label for="">Price - Low to High</label>
                    </li>
                    <li className="input input-checkbox-radio">
                        <input type="radio" name="sort-by" />
                        <label for="">Price - High to Low</label>
                    </li>
                </ul>
                <ul>
                    <h4>Availability</h4>
                    <li className="input input-checkbox-radio">
                        <input type="checkbox" />
                        <label for="">Include out of stock</label>
                    </li>
                </ul>
            </aside>
            <main>
                <h2 className="page-title">Showing All Products <span>(Showing {state.products.length} products)</span></h2>
                <div className="product-cards-container">
                { state.products.length !== 0 && state.products.map(item=><ProductCard key={item._id} value={item} />)}
                </div>
            </main>
        </div>
    );
}