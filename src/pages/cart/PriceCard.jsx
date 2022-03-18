import "./cart.css";

export function PriceCard(){
    return (
        <aside className="price-card box-shadow">
            <h4>PRICE DETAILS</h4>
            <hr/>
            <ul>
                <li>
                    <span>Price (2 items)</span>
                    <span>Rs. 4999</span>
                </li>
                <li>
                    <span>Discount</span>
                    <span className="text-primary">- Rs. 999</span>
                </li>
                <li>
                    <span>Delivery Charges</span>
                    <span className="text-primary">FREE</span>
                </li>
            </ul>
            <hr/>
            <div className="total-amount">
                <span>TOTAL AMOUNT</span>
                <span>Rs. 4999</span>
            </div>
            <hr/>
            <p className="text-primary">You will save Rs. <span>999</span> on this order</p>
            <button className="btn btn-primary">PLACE ORDER</button>
        </aside>
    );
}