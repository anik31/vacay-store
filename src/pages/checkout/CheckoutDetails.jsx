import { useAuth, useCart } from "../../context";
import {loadScript, popper} from "../../utils";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useThrottle } from "../../hooks";
import { toast } from "react-toastify";

export function CheckoutDetails(){
    const {cartState, setOrder, clearCart,checkoutDetails:{address, 
    cartDetails:{quantity, markedPrice, discount, totalPrice}}} = useCart();
    const {user: {firstName, lastName, email}} = useAuth();
    let orderId = `order_${uuid()}`;
    const navigate = useNavigate();

    const makePayment = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    
        if (!res) {
          console.error("Razorpay SDK failed to load, check your connection");
          return;
        }
    
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: totalPrice*100,
          currency: "INR",
          name: "Vacay Store",
          description: "Thank you for shopping with us",
          image: "https://res.cloudinary.com/anik-vacay/image/upload/v1653536487/vacay-store/images/logo_ho278w.png",
          handler: function (response) {
            const orderData = {
              products: [...cartState],
              amount: totalPrice,
              paymentId: response.razorpay_payment_id,
              orderId,
              delivery: address,
            };
            setOrder({ ...orderData });
            clearCart([...cartState]);
            popper();
            navigate("/order_summary");
          },
          prefill: {
            name: `${firstName} ${lastName}`,
            email: email,
            contact: "9876543210",
          },
          theme: {
            color: "#00adef",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
    const paymentHandler = useThrottle(makePayment,400);

    return (
        <aside className="checkout-card box-shadow">
            <h4>ORDER DETAILS</h4>
            <hr/>
            <ul>
                <li className="bold">
                    <span>Item</span>
                    <span>Quantity</span>
                </li>
                {cartState.map(item=>
                <li key={item._id}>
                    <span>{item.title}</span>
                    <span>{item.qty}</span>
                </li>
                )}
            </ul>
            <h4>PRICE DETAILS</h4>
            <hr/>
            <ul>
                <li>
                    <span>Price ({quantity} items)</span>
                    <span>Rs. {markedPrice}</span>
                </li>
                <li>
                    <span>Discount</span>
                    <span className="text-primary">- Rs. {discount}</span>
                </li>
                <li>
                    <span>Delivery Charges</span>
                    <span className="text-primary">FREE</span>
                </li>
                <li className="bold">
                    <span>TOTAL AMOUNT</span>
                    <span>Rs. {totalPrice}</span>
                </li>
            </ul>
            <h4>DELIVER TO</h4>
            <hr/>
            {address && 
            <>
            <span className="text-sm">{address.name}</span>
            <div className="text-sm text-gray">
                <p>{address.street}, {address.city}</p>
                <p>{address.state} - {address.pincode}</p>
            </div>
            </>}
            <button className="btn btn-primary"  
            onClick={()=>{
                if(!address.name){
                    toast.warning("Add delivery address");
                }else{
                    paymentHandler()
                }}}>PLACE ORDER</button>
        </aside>
    );
}